import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    discountPrice: "$8",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    discountPrice: "$25",
    image: "https://via.placeholder.com/150",
  },
  // 更多商品...
];

const MainContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined"
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ marginBottom: 4 }}
      />
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.discountPrice ? (
                    <>
                      <span style={{ textDecoration: "line-through" }}>
                        {product.price}
                      </span>{" "}
                      <span>{product.discountPrice}</span>
                    </>
                  ) : (
                    product.price
                  )}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* 分頁邏輯可以根據需求添加 */}
    </Container>
  );
};

export default MainContent;
