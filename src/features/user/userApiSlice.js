import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get all Permission
export const getAllpermission = createAsyncThunk("user/getAllpermission", async (data) => {
   try {
     const response = await axios.get('http://localhost:5050/api/permission', {
        withCredentials: true, 
       })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})


// Register Permission
export const createPermission = createAsyncThunk("user/createPermission", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/permission', data, {
        withCredentials: true,
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})


// Register Permission
export const deletePermission = createAsyncThunk("user/deletePermission", async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5050/api/permission/${id}`,  {
         withCredentials: true,
      })
      return response.data
    } catch (error) {
     throw new Error(error.response.data.message)
    }
    
 })
 

 // Register Permission
export const statusPermission = createAsyncThunk("user/statusPermission", async ({status, id}) => {
   try {
     const response = await axios.put(`http://localhost:5050/api/permission/status/${id}`, {status: status},  {
        withCredentials: true,
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})


// Create Role
export const createRole = createAsyncThunk("user/createRole", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/role', data, {
        withCredentials: true,
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})

// get all Role
export const getAllrole = createAsyncThunk("user/getAllrole", async (data) => {
   try {
     const response = await axios.get('http://localhost:5050/api/role', {
        withCredentials: true, 
       })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})

// Updated role
export const updatedRole = createAsyncThunk("user/updatedRole", async (data) => {
   try {
     const response = await axios.put(`http://localhost:5050/api/role/${data.id}`, {name: data.name, permissions: data.permissions}, {
        withCredentials: true, 
       })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})