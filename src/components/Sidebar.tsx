import React, { useState } from "react";
import { List, ListItem, ListItemText, Box } from "@mui/material";

interface SideBarProps {
  categories: string[];
}

const SideBar: React.FC<SideBarProps> = ({ categories }) => {
  return (
    <>
      <Box
        sx={{
          padding: 0,
          margin: 2,
          boxShadow: "0 0 2px 3px rgba(255,255,255,0.3)",
        }}
      >
        <List>
          {categories.map((category, index) => (
            <ListItem key={index}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default SideBar;
