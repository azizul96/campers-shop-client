import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  ratings: number;
  images: string;
};

type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Explicitly defining the type for the fetchProducts async thunk
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: SerializedError }
>("product/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Product[]>(
      "http://localhost:5000/api/products"
    );
    return response.data;
  } catch (err) {
    return rejectWithValue(err as SerializedError);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch products";
        state.loading = false;
      });
  },
});

export const selectProducts = (state: RootState) => state.product.products;

export default productSlice.reducer;
