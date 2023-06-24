import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getLoarem=createAsyncThunk("lorem/getData",async (arg,{rejectWithValue})=>{
    try {
       const {data}= await axios.get("https://server.nftapi.online/OnAuction_marketplace_history?category=All")
       return data;
        
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})


export const getUserProfile=createAsyncThunk("user/getUserProfile",async (arg,{rejectWithValue})=>{
    try {
       const {data}= await axios.get("https://server.nftapi.online/get_Bid_History")
       return data;
        
    } catch (error) {
        rejectWithValue(error.response.data)
        
    }
})

const loremSlice = createSlice({
    name: 'lorem',
    initialState: {
        data: [],
        userInfo:[],
        isSuccess: false,
        message: "",
        loading: false
    },
    reducers: { },
    extraReducers:{
        [getLoarem.pending]:(state,{payload})=>{
            state.loading=true
        },
        [getLoarem.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=payload;
            state.isSuccess=true
        },
        [getLoarem.rejected]:(state,{payload})=>{
            state.loading=false;
            state.message=payload;
            state.isSuccess=false
        },

        [getUserProfile.pending]:(state,{payload})=>{
            state.loading=true
        },
        [getUserProfile.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.userInfo=payload;
            state.isSuccess=true
        },
        [getUserProfile.rejected]:(state,{payload})=>{
            state.loading=false;
            state.message=payload;
            state.isSuccess=false
        }

        


    }
})


export default  loremSlice