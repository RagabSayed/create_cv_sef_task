
import {configureStore} from "@reduxjs/toolkit";
import CvCreateReducer from "./Reducers/CvCreateReducer.js";

export const Store = configureStore({
    reducer :{
        cvCreated : CvCreateReducer
    }
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export default Store;
