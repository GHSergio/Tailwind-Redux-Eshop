import React from "react";
import { Grid, Button, IconButton, Badge, Typography } from "@mui/material";

const links = ["Women", "Men", "Kids", "Baby", "Sport"];

const renderLinks = () => {
  return links.map((link, index) => (
    <React.Fragment key={link}>
      <Button color="inherit" sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem" } }}>
        {link}
      </Button>
      {index < links.length - 1 && (
        <Typography variant="body1" sx={{ mx: { xs: 1, sm: 1 } }}>
          |
        </Typography>
      )}
    </React.Fragment>
  ));
};

const NavLinks: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      {renderLinks()}
    </Grid>
  );
};

export default NavLinks;
