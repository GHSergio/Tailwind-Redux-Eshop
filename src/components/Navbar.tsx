import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Grid,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

interface NavBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ setSearchQuery }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center" spacing={4}>
          {/* Logo */}
          <Grid item xs={3} sm={2}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: { xs: "0.6rem", sm: "1rem" } }}
            >
              E-Shop
            </Typography>
          </Grid>
          {/* NavLinks */}
          <Grid
            item
            sm={8}
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <NavLinks />
          </Grid>
          {/* SearchBar */}
          <Grid item xs={7} sx={{ display: { xs: "block", sm: "none" } }}>
            <SearchBar onSearch={setSearchQuery} height={30} width="100%" />
          </Grid>
          {/* Cart and User Icons */}
          <Grid
            item
            xs={1}
            sm={2}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton color="inherit">
              <Badge badgeContent={5} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" sx={{ marginLeft: 1 }}>
              <AccountCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
