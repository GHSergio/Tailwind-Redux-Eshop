import React, { useState } from "react";
import { Grid } from "@mui/material";
import MainContent from "../components/MainContent";
// import { useProductContext } from "../contexts/ProductContext";

const HomePage: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        sx={{ minHeight: "100vh", width: "100%" }}
      >
        <MainContent />
      </Grid>
    </>
  );
};

export default HomePage;
