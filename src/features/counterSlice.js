import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../my-utils/request"; // fetchData funksiyasini to'g'ri import qilish

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk(
  "counter/fetchArticles",
  async () => {
    const data = await fetchData(); // fetchData funksiyasidan foydalanish
    console.log(data); // Ma'lumotlarni konsolda chop etish
    return data;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default counterSlice.reducer;
