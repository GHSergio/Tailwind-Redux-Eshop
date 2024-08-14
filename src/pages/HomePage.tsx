import React, { useState } from "react";
import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        sx={{ minHeight: "100vh", width: "100%" }}
      >
        {/* Navbar 區域，固定高度 */}
        {/* <Grid
          item
          sx={{
            height: "60px",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <NavBar />
        </Grid> */}
        {/* 主內容區域，佔據剩餘高度 */}
        <Grid item sx={{ flexGrow: 1 }}>
          <MainContent />
        </Grid>
        {/* Footer 區域，固定高度 */}
        {/* <Grid item sx={{ height: { xs: "60px", sm: "120px" } }}>
          <Footer />
        </Grid> */}
      </Grid>
    </>
  );
};

export default HomePage;
