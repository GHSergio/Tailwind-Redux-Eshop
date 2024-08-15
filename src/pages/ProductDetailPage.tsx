import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useProductContext } from "../contexts/ProductContext";
import { Product, fetchProductById } from "../api/FakeStoreAPI";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const { addToCart } = useProductContext(); // 从上下文中获取addToCart函数

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(Number(id));
        setProduct(fetchedProduct);
        if (fetchedProduct) {
          setSelectedColor(""); // 假设有颜色属性，这里可以根据商品数据设置初始颜色
          setSelectedSize(""); // 假设有尺寸属性，这里可以根据商品数据设置初始尺寸
        }
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
        image: product.image,
      });
    }
  };

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
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "1rem",
        height: "100vh",
      }}
    >
      {/* 上面中容器 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2rem",
        }}
      >
        {/* 左側區域：商品圖片 */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
          />
        </Box>

        {/* 右側區域：商品詳情 */}
        <Box sx={{ flex: 1 }}>
          {/* 商品名稱 */}
          <Typography variant="h5" component="h1" gutterBottom>
            {product.title} {selectedColor && `- ${selectedColor}`}{" "}
            {selectedSize && `(${selectedSize})`}
          </Typography>
          <Divider sx={{ marginY: "1rem" }} />

          {/* 顏色 & 尺寸 & 價錢 */}
          <Box>
            <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
              <InputLabel>Color</InputLabel>
              <Select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value as string)}
                label="Color"
              >
                <MenuItem value="Red">Red</MenuItem>
                <MenuItem value="Blue">Blue</MenuItem>
                <MenuItem value="Green">Green</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
              <InputLabel>Size</InputLabel>
              <Select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as string)}
                label="Size"
              >
                <MenuItem value="S">Small</MenuItem>
                <MenuItem value="M">Medium</MenuItem>
                <MenuItem value="L">Large</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="h5" component="h2" gutterBottom>
              Price: ${product.price}
            </Typography>
          </Box>
          <Divider sx={{ marginY: "1rem" }} />

          {/* 數量 & 加到購物車 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FormControl sx={{ minWidth: "100px" }}>
              <InputLabel>Quantity</InputLabel>
              <Select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value as number)}
                label="Quantity"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 下面中容器 */}
      {/* 商品敘述 */}
      <Box sx={{ marginTop: "2rem" }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Product Description
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetail;
