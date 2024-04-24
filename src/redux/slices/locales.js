

import axios from '../../libs/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchLocales = createAsyncThunk('locales/fetchLocales', async () => {
    const { data } = await axios.get(`/i18n/locales`);

    return data;
})



const initialState = {
    locales: {
        item: [],
        status: 'loading'
    }
}

const fetchSlice = createSlice({
    name: 'locales',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchLocales.pending, (state) => {
            state.locales.item = [];
            state.locales.status = 'loading';
        });
        builder.addCase(fetchLocales.fulfilled, (state, action) => {
            state.locales.item = action.payload;
            state.locales.status = 'loaded';
        });
        builder.addCase(fetchLocales.rejected, (state) => {
            state.locales.item = [];
            state.locales.status = 'error';
        })
    }
})

export const localesReducer = fetchSlice.reducer