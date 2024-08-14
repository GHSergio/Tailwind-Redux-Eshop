import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useProductContext } from "../contexts/ProductContext";

interface NavLinksProps {
  links: string[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const { setCurrentCategory } = useProductContext();

  return (
    <Grid container justifyContent="center" alignItems="center">
      {links.map((link, index) => (
        <React.Fragment key={link}>
          <Button
            color="inherit"
            sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem" } }}
            onClick={() => setCurrentCategory(link.toLowerCase())}
          >
            {link}
          </Button>
          {index < links.length - 1 && (
            <Typography variant="body1" sx={{ mx: 1 }}>
              |
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default NavLinks;
