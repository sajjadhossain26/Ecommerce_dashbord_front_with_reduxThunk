import { createSlice } from "@reduxjs/toolkit";
import {
  allBrand,
  createBrand,
  createTag,
  deleteBrand,
  getAllCategory,
  getAllTag,
} from "./productApiSlice";

// Create auth slice

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    brand: null,
    category: null,
    tag: null,
    message: null,
    error: null,
    loader: false,
  },

  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })

      .addCase(createBrand.fulfilled, (state, action) => {
        state.brand = state.brand ?? [];
        state.brand.push(action.payload.brand);
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(allBrand.pending, (state, action) => {})
      .addCase(allBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })

      .addCase(allBrand.fulfilled, (state, action) => {
        state.brand = action.payload;
        state.loader = false;
      })
      .addCase(deleteBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })

      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.brand = state.brand.filter(
          (data) => data._id != action.payload.brand._id
        );
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(createTag.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createTag.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })

      .addCase(createTag.fulfilled, (state, action) => {
        state.tag = state.tag ?? [];
        state.tag.push(action.payload.tag);
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(getAllTag.pending, (state, action) => {})
      .addCase(getAllTag.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })

      .addCase(getAllTag.fulfilled, (state, action) => {
        state.tag = action.payload;
        state.loader = false;
      })

      .addCase(getAllCategory.pending, (state, action) => {})
      .addCase(getAllCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })

      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loader = false;
      });
  },
});

// selectors

// selectors
export const getAllProduct = (state) => state.product;

// export
export default productSlice.reducer;

// action export
export const { setMessageEmpty } = productSlice.actions;
