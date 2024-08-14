// Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid, IconButton, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NavLinks from "./NavLinks";
import { useProductContext } from "../contexts/ProductContext";

const Layout: React.FC = () => {
  const { categories } = useProductContext();

  // 定義 Icon 樣式
  const iconStyle = (size: string = "1.2rem") => ({
    padding: 0,
    fontSize: size,
    marginBottom: "-1px",
  });

  // 定義 Typography 樣式
  const TypographyStyle = () => ({
    fontSize: "0.5rem",
  });

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      {/* 小螢幕才出現 NavLinks */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          top: "56px",
          bgcolor: "white",
          width: "100%",
          zIndex: 2,
          boxShadow: "0 0 3px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <NavLinks links={categories} />
      </Box>

      <Box sx={{ flex: 1, mt: "60px" }}>
        <Outlet />
      </Box>

      {/* 小螢幕才出現 Bottom Navigation */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "background.paper",
          display: { xs: "flex", sm: "none" },
          justifyContent: "space-around",
          alignItems: "center",
          boxShadow: "0 0 3px 2px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          height: "50px",
        }}
      >
        {/* Home Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton color="inherit" sx={iconStyle()}>
            <HomeIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="caption" sx={TypographyStyle()}>
            首頁
          </Typography>
        </Box>

        {/* Hamburger Menu */}
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            sx={iconStyle()}
            onClick={toggleNavLinksVisible}
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="caption" sx={TypographyStyle()}>
            分類
          </Typography>
        </Box> */}

        {/* Cart Icon */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton color="inherit" sx={iconStyle()}>
            <Badge badgeContent={5} color="error">
              <ShoppingCartIcon fontSize="inherit" />
            </Badge>
          </IconButton>
          <Typography variant="caption" sx={TypographyStyle()}>
            購物車
          </Typography>
        </Box>

        {/* User Icon */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton color="inherit" sx={iconStyle()}>
            <AccountCircleIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="caption" sx={TypographyStyle()}>
            個人
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
