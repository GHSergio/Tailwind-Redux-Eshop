import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useProductContext } from "../../contexts/ProductContext";

const ReviewOrder: React.FC = () => {
  const { cart } = useProductContext();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Review Your Order
      </Typography>
      <Divider sx={{ my: 2 }} />
      {cart.map((item, index) => (
        <Box key={index} mb={2}>
          <Typography variant="body1">
            {item.title} ({item.quantity})
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ${item.price} x {item.quantity}
          </Typography>
          <Divider sx={{ my: 1 }} />
        </Box>
      ))}
      <Box sx={{ marginTop: "2rem", textAlign: "right" }}>
        <Typography variant="h5" gutterBottom>
          Total: ${calculateTotal()}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewOrder;
