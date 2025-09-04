import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import ShortenerPage from "./pages/ShortenerPage";
import StatsPage from "./pages/StatsPage";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Shortener</Button>
          <Button color="inherit" component={Link} to="/stats">Statistics</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<ShortenerPage urls={urls} setUrls={setUrls} />} />
        <Route path="/stats" element={<StatsPage urls={urls} />} />
      </Routes>
    </Router>
  );
}

export default App;