import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, fetchProductById } from "../api/FakeStoreAPI";
import { Box, Typography, Button, CircularProgress } from "@mui/material";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // 獲取URL中的id參數
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(Number(id));
        setProduct(fetchedProduct);
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {product.title}
      </Typography>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
      />
      <Typography variant="h6" component="h2" gutterBottom>
        Price: {product.price}
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        {product.description}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Category: {product.category}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </Typography>
      <Button variant="contained" color="primary" fullWidth>
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductDetail;
