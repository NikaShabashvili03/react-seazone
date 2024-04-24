import { configureStore } from '@reduxjs/toolkit'
import { homeReducer } from './slices/home';
import { localesReducer } from './slices/locales';

const store = configureStore({
    reducer: {
        home: homeReducer,
        locales: localesReducer
    }
});

export default store;