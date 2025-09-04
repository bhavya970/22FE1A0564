import React from "react";
import UrlShortenerForm from "../components/UrlShortenerForm";
import UrlList from "../components/UrlList";
import { Container, Typography } from "@mui/material";

const ShortenerPage = ({ urls, setUrls }) => {
  const handleShorten = (shortened) => {
    setUrls((prev) => [...prev, shortened]);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 2 }}>
        URL Shortener
      </Typography>
      <UrlShortenerForm onShorten={handleShorten} />
      <UrlList urls={urls} />
    </Container>
  );
};

export default ShortenerPage;