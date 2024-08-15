import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductContext } from "../contexts/ProductContext";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useProductContext();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cart.map((item) => (
              <Grid key={item.id} item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                        marginRight: "1rem",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body1">
                        Price: ${item.price}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <Typography variant="body1" sx={{ marginX: "1rem" }}>
                          {item.quantity}
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ marginY: "1rem" }} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ marginTop: "2rem", textAlign: "right" }}>
            <Typography variant="h5" gutterBottom>
              Total: ${calculateTotal()}
            </Typography>
            <Button variant="contained" color="primary">
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;
