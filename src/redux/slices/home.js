import axios from '../../libs/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchHome = createAsyncThunk('home/fetchHome', async ({locale}) => {
    const { data } = await axios.get(`/home?locale=${locale}`);

    return data;
})



const initialState = {
    home: {
        item: [],
        status: 'loading'
    }
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchHome.pending, (state) => {
            state.home.item = [];
            state.home.status = 'loading';
        });
        builder.addCase(fetchHome.fulfilled, (state, action) => {
            state.home.item = action.payload.data.attributes;
            state.home.status = 'loaded';
        });
        builder.addCase(fetchHome.rejected, (state) => {
            state.home.item = [];
            state.home.status = 'error';
        })
    }
})

export const homeReducer = homeSlice.reducer