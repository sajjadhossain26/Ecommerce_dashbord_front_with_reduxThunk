import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all Permission
export const allBrand = createAsyncThunk(
  "product/getAllBrand",
  async (data) => {
    try {
      const response = await axios.get("http://localhost:5050/api/brand", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create brand
export const createBrand = createAsyncThunk(
  "product/createBrand",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/brand",
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// delete brand
export const deleteBrand = createAsyncThunk(
  "product/deleteBrand",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/brand/${id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create tag

export const createTag = createAsyncThunk("product/createTag", async (data) => {
  try {
    const response = await axios.post("http://localhost:5050/api/tag", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get all tag
export const getAllTag = createAsyncThunk("product/getAllTag", async (data) => {
  try {
    const response = await axios.get("http://localhost:5050/api/tag", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get all category
export const getAllCategory = createAsyncThunk(
  "product/getAllCategory",
  async (data) => {
    try {
      const response = await axios.get("http://localhost:5050/api/category", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//  create Categorys
export const createCategorys = createAsyncThunk(
  "product/createCategorys",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/category",
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
