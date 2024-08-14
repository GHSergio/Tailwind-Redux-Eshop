import React, { useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../components/NavBar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    {
      id: 1,
      name: "格紋長袖襯衫-男（ 藍綠格 -S)",
      price: "$10",
      discountPrice: "$8",
      image: "https://s.lativ.com.tw/i/64573/64573011/6457301_500.jpg",
    },
    {
      id: 2,
      name: "格紋長袖襯衫-男（ 藍綠格 -S)",
      price: "$20",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "格紋長袖襯衫-男（ 藍綠格 -S)",
      price: "$30",
      discountPrice: "$25",
      image: "https://via.placeholder.com/150",
    },
  ];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Grid
        container
        direction="column"
        sx={{ minHeight: "100vh", width: "100%" }}
      >
        {/* Navbar 區域，固定高度 */}
        <Grid
          item
          sx={{
            height: "60px",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Navbar setSearchQuery={setSearchQuery} />
        </Grid>
        {/* 主內容區域，佔據剩餘高度 */}
        <Grid item sx={{ flexGrow: 1 }}>
          <MainContent
            filteredProducts={filteredProducts}
            setSearchQuery={setSearchQuery}
          />
        </Grid>
        {/* Footer 區域，固定高度 */}
        <Grid item sx={{ height: { xs: "60px", sm: "120px" } }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
