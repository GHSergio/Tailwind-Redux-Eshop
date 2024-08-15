// src/reducers/productReducer.ts
import { Product } from "../api/FakeStoreAPI";

interface ProductState {
  products: Product[];
  categories: string[];
  currentCategory: string;
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: ProductState = {
  products: [],
  categories: [],
  currentCategory: "",
  loading: true,
  error: null,
  searchQuery: "",
};

const productReducer = (state = initialState, action: any): ProductState => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload, loading: false };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_CURRENT_CATEGORY":
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};

export default productReducer;
