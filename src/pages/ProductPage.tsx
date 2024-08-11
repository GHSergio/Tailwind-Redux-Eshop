import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const ProductPage: React.FC = () => {
  const product = {
    id: 1,
    name: "Product 1",
    price: "$10",
    description: "This is a great product.",
    image: "https://via.placeholder.com/400",
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={product.image}
              alt={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography variant="h4" component="div">
              {product.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {product.price}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              {product.description}
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Add to Cart
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
