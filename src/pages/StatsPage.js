import React from "react";
import { Container, Typography } from "@mui/material";
import StatsTable from "../components/StatsTable";

const StatsPage = ({ urls }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 2 }}>
        URL Statistics
      </Typography>
      <StatsTable urls={urls} />
    </Container>
  );
};

export default StatsPage;