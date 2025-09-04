import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { logEvent } from "../utils/logger";
import { generateShortCode, isValidUrl } from "../utils/urlUtils";

const UrlShortenerForm = ({ onShorten }) => {
  const [longUrl, setLongUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [customCode, setCustomCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidUrl(longUrl)) {
      alert("Invalid URL format");
      logEvent("Invalid URL submitted", { longUrl });
      return;
    }

    let shortCode = customCode || generateShortCode();
    let expiryMinutes = validity ? parseInt(validity) : 30;

    const shortened = {
      longUrl,
      shortCode,
      expiry: Date.now() + expiryMinutes * 60 * 1000,
      clicks: []
    };

    logEvent("URL Shortened", shortened);
    onShorten(shortened);

    setLongUrl("");
    setValidity("");
    setCustomCode("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Enter Long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Validity (minutes, optional)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        type="number"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Custom Short Code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Shorten URL
      </Button>
    </Box>
  );
};

export default UrlShortenerForm;