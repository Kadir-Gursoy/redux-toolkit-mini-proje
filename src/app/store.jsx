import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../app/features/authSlice"
import newsReducer from "../app/features/newSlice"

export const store = configureStore({
    reducer: {
        user : authReducer,
        api : newsReducer,
        
        // auth: authReducer,
        // news: newsReducer
    },
    devTools: process.env.NODE_ENV !=="production",
    //! eğer geliştirme aşaması production ise ozm yukardaki ifade false döndürür dolayısıyle devTool kullanıma kapalı olur 
})