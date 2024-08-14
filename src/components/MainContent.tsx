import React, { useState } from "react";
import {
  Grid,
  Box,
  IconButton,
  Badge,
  Drawer,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import NavLink from "./NavLinks";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import Sidebar from "./SideBar";

interface MainContentProps {
  filteredProducts: Array<{
    id: number;
    name: string;
    price: string;
    discountPrice?: string;
    image: string;
  }>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MainContent: React.FC<MainContentProps> = ({
  filteredProducts,
  setSearchQuery,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // 定義 Icon 樣式
  const iconStyle = (size: string = "1.2rem") => ({
    padding: 0,
    fontSize: size,
    marginBottom: "-1px",
  });

  //定義 Typography 樣式
  const TypographyStyle = () => ({
    fontSize: "0.5rem",
  });

  return (
    <>
      {/* Main Container */}
      <Grid
        container
        sx={{
          width: "100%",
          marginX: "auto",
          paddingX: { xs: "0", sm: "0.5rem" },
        }}
      >
        {/* Sidebar SM */}
        <Grid
          item
          xs={2}
          sm={2}
          sx={{
            height: "100%",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Sidebar />
        </Grid>

        {/* NavLink */}
        <Grid
          item
          xs={12}
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
          <NavLink />
        </Grid>

        {/* Search & Card */}
        <Grid item xs={12} sm={10}>
          {/* SearchBar */}
          <Grid
            item
            sm={3}
            mt={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <SearchBar onSearch={setSearchQuery} />
          </Grid>

          {/* Card container */}
          <Grid container spacing={3} mt={3}>
            {filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  discountPrice={product.discountPrice}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Navigation for XS screens */}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton color="inherit" sx={iconStyle()} onClick={toggleDrawer}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="caption" sx={TypographyStyle()}>
            分類
          </Typography>
        </Box>

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

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Sidebar />
      </Drawer>
    </>
  );
};

export default MainContent;
