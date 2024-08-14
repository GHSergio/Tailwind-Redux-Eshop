import React, { useState, useEffect, useContext, createContext } from "react";
import {
  Product,
  fetchAllProducts,
  fetchAllCategories,
} from "../api/FakeStoreAPI";

// 定義 Context 的資料結構，包括產品列表、類別列表、載入狀態以及錯誤訊息
interface ProductContextType {
  products: Product[];
  categories: string[];
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

// 創建一個 Context，初始值為 undefined，這樣可以讓 TypeScript 檢查確保我們正確使用這個 Context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// 自定義 Hook，用於從 ProductContext 中獲取數據
export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext); // 使用 useContext 來獲取當前的 Context 值
  if (!context) {
    // 如果 context 為 undefined，拋出錯誤，說明這個 Hook 必須在 ProductProvider 中使用
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context; // 返回 Context 值
};

// 創建一個 Provider 組件，包裹應用或組件樹，提供產品和類別數據
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState<string>("");

  console.log("當前分類:", currentCategory);

  useEffect(() => {
    const loadData = async () => {
      try {
        // 同時發送兩個請求，分別獲取所有產品和所有類別數據
        const [productsData, categoriesData] = await Promise.all([
          fetchAllProducts(),
          fetchAllCategories(),
        ]);
        // 將獲取到的產品數據設置到 state
        setProducts(productsData);
        // 將獲取到的類別數據設置到 state
        setCategories(categoriesData);
      } catch (err) {
        // 如果發生錯誤，將錯誤信息設置到 state
        setError("Failed to load data");
      } finally {
        // 無論成功或失敗，都將 loading 狀態設置為 false
        setLoading(false);
      }
    };

    // 調用 loadData 函數來加載數據
    loadData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        currentCategory,
        setCurrentCategory,
        loading,
        error,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
