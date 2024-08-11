import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My E-Commerce Store
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Shop</Button>
            <Button color="inherit">Login</Button>
            <IconButton color="inherit">
              <Badge badgeContent={5} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
