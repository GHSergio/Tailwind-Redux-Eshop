import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const cartItems = [
  { id: 1, name: "Product 1", price: "$10", quantity: 1 },
  { id: 2, name: "Product 2", price: "$20", quantity: 2 },
];

const CartPage: React.FC = () => {
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="div" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography variant="body1">{item.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Total: ${total.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Checkout
      </Button>
    </Container>
  );
};

export default CartPage;
