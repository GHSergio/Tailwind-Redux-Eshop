import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
// import Sidebar from "./SideBar";
import { useProductContext } from "../contexts/ProductContext";

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = ({}) => {
  // const [isNavLinksVisible, setIsNavLinksVisible] = useState(true);
  // 使用 useProductContext 獲取 context 中的數據
  const {
    products,
    categories,
    currentCategory,
    searchQuery,
    loading,
    error,
    setSearchQuery,
  } = useProductContext();

  // 根據 currentCategory 和 searchQuery 進行過濾
  const filteredProducts = products.filter((product) => {
    // 檢查產品是否符合選中的分類
    const matchesCategory =
      currentCategory === "" || product.category === currentCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // 定義 Icon 樣式
  const iconStyle = (size: string = "1.2rem") => ({
    padding: 0,
    fontSize: size,
    marginBottom: "-1px",
  });

  // 定義 Typography 樣式
  const TypographyStyle = () => ({
    fontSize: "0.5rem",
  });

  return (
    <>
      {/* Main Container */}
      <Grid
        container
        sx={{
          width: "100%",
          marginX: "auto",
          marginY: "20px",
          paddingX: { xs: "0", sm: "0.5rem" },
        }}
      >
        {/* Sidebar SM */}
        {/* <Grid
          item
          xs={2}
          sm={2}
          sx={{
            height: "100%",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Sidebar categories={categories} />
        </Grid> */}

        {/* Search & Card */}
        <Grid item xs={12} sm={12}>
          {/* SearchBar */}
          <Grid
            item
            sm={3}
            // mt={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <SearchBar onSearch={setSearchQuery} />
          </Grid>

          {/* 顯示結果文字 */}
          <Grid item mt={3}>
            符合的結果為 {filteredProducts.length} 筆
          </Grid>

          {/* Card container */}
          <Grid container spacing={3} mt={0}>
            {filteredProducts.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  搜尋不到相關結果
                </Typography>
              </Grid>
            ) : (
              filteredProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  {/* 傳遞 product 資料給 ProductCard */}
                  <ProductCard
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    // discountPrice={product.discountPrice}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainContent;
