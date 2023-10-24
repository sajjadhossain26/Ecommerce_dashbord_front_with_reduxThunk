import { createSlice } from "@reduxjs/toolkit";
import { createPermission, deletePermission, getAllpermission } from "./userApiSlice";

// Create auth slice


const userSlice = createSlice({
    name: "user",
    initialState:{
        permission: null,
        role: null,
        user: null,
        error: null,
        message: null
    },

    reducers: {
        setMessageEmpty: (state, action) => {
            state.message = null;
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllpermission.rejected,(state, action) => {
            state.error = action.error.message
        })

        .addCase(getAllpermission.fulfilled,(state, action) => {
            state.permission = action.payload
        })

        .addCase(createPermission.rejected,(state, action) => {
            state.error = action.error.message
        })

        .addCase(createPermission.fulfilled,(state, action) => {
            state.permission.push(action.payload.permission)
            state.message= action.payload.message
        })

        .addCase(deletePermission.rejected,(state, action) => {
            state.error = action.error.message
        })

        .addCase(deletePermission.fulfilled,(state, action) => {
            state.permission = state.permission.filter((data) => data._id != action.payload.permission._id);
            state.message= action.payload.message
        })

    
    },
    },
);


// selectors
export const getAllPermissionData = (state) => state.user;

// export 
export default userSlice.reducer;

// action export
export const {setMessageEmpty} = userSlice.actions