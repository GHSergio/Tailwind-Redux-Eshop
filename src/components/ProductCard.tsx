import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  discountPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  discountPrice,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div" fontSize={"0.8rem"}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {discountPrice ? (
            <>
              <span style={{ textDecoration: "line-through" }}>{price}</span>{" "}
              <span>{discountPrice}</span>
            </>
          ) : (
            price
          )}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">商品細節</Button>
        <Button size="small">添加到購物車</Button>
      </CardActions> */}
    </Card>
  );
};

export default ProductCard;
