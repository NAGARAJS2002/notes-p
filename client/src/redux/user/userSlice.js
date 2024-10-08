import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loginStart: (state)=>{
            state.loading = true;
        },

        loginSuccess : (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFailure: (state, action)=>{
            state.error = action.payload;
            state.loading = false
        },

        updateUserStart : (state ) => {
            state.loading = true;
        } ,

        updateUserSuccess : (state ,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        updateUserFailure : (state , action) => {
            state.error = action.payload;
            state.loading = false;
        },

        deleteUserStart: (state) => {
            state.loading = true;
        },

        deleteUserSuccess : (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        deleteUserFailure : (state , action) => {
            state.currentUser = action.payload;
            state.error = null;
        },
        signOutUserStart: (state) => {
            state.loading = true;
        },

        signOutUserSuccess : (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        signOutUserFailure : (state , action) => {
            state.currentUser = action.payload;
            state.error = null;
        }


    }
});


export const {loginFailure,
    loginStart,
    loginSuccess,
     updateUserFailure,
     updateUserSuccess 
     ,updateUserStart,
     deleteUserFailure,
     deleteUserStart,
     deleteUserSuccess,
     signOutUserFailure,
     signOutUserStart,
     signOutUserSuccess
    } = userSlice.actions;

export default userSlice.reducer