import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const ShippingInformation: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Shipping Information
      </Typography>
      <TextField
        fullWidth
        label="Full Name"
        variant="outlined"
        margin="normal"
      />
      <TextField fullWidth label="Address" variant="outlined" margin="normal" />
      <TextField fullWidth label="City" variant="outlined" margin="normal" />
      <TextField
        fullWidth
        label="Postal Code"
        variant="outlined"
        margin="normal"
      />
      <TextField fullWidth label="Country" variant="outlined" margin="normal" />
    </Box>
  );
};

export default ShippingInformation;
