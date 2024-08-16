import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const PaymentDetails: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <TextField
        fullWidth
        label="Card Number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Card Holder Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Expiry Date"
        variant="outlined"
        margin="normal"
      />
      <TextField fullWidth label="CVV" variant="outlined" margin="normal" />
    </Box>
  );
};

export default PaymentDetails;
