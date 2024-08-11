import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        {/* Navbar 區域 */}
        <Box sx={{ flexShrink: 0, width: "100%" }}>
          <Navbar />
        </Box>

        {/* 主內容區域 */}
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <MainContent />
        </Box>

        {/* Footer 區域 */}
        <Box sx={{ flexShrink: 0, width: "100%" }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
