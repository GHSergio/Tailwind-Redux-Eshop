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
  // 使用 useState 管理產品數據
  const [products, setProducts] = useState<Product[]>([]);
  // 使用 useState 管理類別數據
  const [categories, setCategories] = useState<string[]>([]);
  // 使用 useState 管理數據載入狀態
  const [loading, setLoading] = useState(true);
  // 使用 useState 管理可能發生的錯誤
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // 使用 useEffect 來在組件掛載時觸發數據加載
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

  // 返回一個 Context Provider，將產品和類別數據，以及載入狀態和錯誤信息，提供給子組件
  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        error,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children} {/* 渲染傳遞進來的子組件 */}
    </ProductContext.Provider>
  );
};
