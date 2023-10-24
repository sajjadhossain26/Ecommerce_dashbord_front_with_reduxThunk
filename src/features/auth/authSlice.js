import { createSlice } from "@reduxjs/toolkit";
import { createUser, findResetUser, loggedInUser, loginUser, logoutUser, newPassword, resetCodeConfirm } from "./authApiSlice";

// Create auth slice


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")): null,
        message: null,
        error: null
    },

    reducers: {
        setMessageEmpty: (state, action) => {
            state.message = null;
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUser.rejected,(state, action) => {
            state.error = action.error.message
        })

        .addCase(createUser.fulfilled,(state, action) => {
            state.message = action.payload.message
        })
         .addCase(loginUser.rejected,(state, action) => {
            state.error = action.error.message
        })
         .addCase(loginUser.fulfilled,(state, action) => {
            state.message = action.payload.message
            state.user = action.payload.user
            localStorage.setItem("user", JSON.stringify(action.payload.user))

        })
            .addCase(logoutUser.rejected,(state, action) => {
            state.error = action.error.message
        })
         .addCase(logoutUser.fulfilled,(state, action) => {
            state.message = action.payload.message
            state.user = action.payload.user
            localStorage.removeItem("user")
        })

          .addCase(loggedInUser.rejected,(state, action) => {
            state.error = action.error.message,
            state.user = null
        })
         .addCase(loggedInUser.fulfilled,(state, action) => {
            state.user = action.payload
        })

        .addCase(findResetUser.rejected,(state, action) => {
            state.error = action.error.message
        })
         .addCase(findResetUser.fulfilled,(state, action) => {
            state.message = action.payload.message
        })
        .addCase(resetCodeConfirm.rejected,(state, action) => {
            state.error = action.error.message
        })
         .addCase(resetCodeConfirm.fulfilled,(state, action) => {
            state.message = action.payload.message
            state.user = action.payload.user

        })
        .addCase(newPassword.rejected,(state, action) => {
            state.error = action.error.message
        })
         .addCase(newPassword.fulfilled,(state, action) => {
            state.message = action.payload.message
        })
    },
});


// selectors
export const getAuthData = (state) => state.auth;

// export 
export default authSlice.reducer;

// action export
export const {setMessageEmpty} = authSlice.actions