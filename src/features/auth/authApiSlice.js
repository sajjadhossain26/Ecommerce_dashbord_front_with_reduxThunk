import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/auth/register', data, {
      withCredentials: true,
      
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})


// Login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/auth/login', data, {
      withCredentials: true,
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})


// Logout user
export const logoutUser = createAsyncThunk("auth/logoutUser", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/auth/logout', "", {
      withCredentials: true,
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})



// LoggedIn user
export const loggedInUser = createAsyncThunk("auth/loggedInUser", async () => {
   try {
     const response = await axios.get('http://localhost:5050/api/auth/me', {
      withCredentials: true,
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})



// Find user
export const findResetUser = createAsyncThunk("auth/findResetUser", async (data) => {
  try {
    console.log(data);
    const response = await axios.post('http://localhost:5050/api/auth/find-user', data, {
     withCredentials: true,
    })
    return response.data
  } catch (error) {
   throw new Error(error.response.data.message)
  }
  
})

// Reset verification code confirm
export const resetCodeConfirm = createAsyncThunk("auth/resetCodeConfirm", async (data) => {
  try {
    const response = await axios.post('http://localhost:5050/api/auth/confirm_code', data, {
     withCredentials: true,
    })
    return response.data
  } catch (error) {
   throw new Error(error.response.data.message)
  }
  
})

// Reset verification code confirm
export const newPassword = createAsyncThunk("auth/newPassword", async (data) => {
  try {
    const response = await axios.post('http://localhost:5050/api/auth/new_password', data, {
     withCredentials: true,
    })
    return response.data
  } catch (error) {
   throw new Error(error.response.data.message)
  }
  
})