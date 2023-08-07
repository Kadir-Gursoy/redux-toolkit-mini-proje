import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
news: [],
loading: false,
error: false,
}

export const getNews = createAsyncThunk(

"getNewsFunc",  //! action type name için
async () => {
    const API_KEY = "a3c87228b8234e9ca794777fd97dac94"
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    const {data} = await axios(url)
    return data.articles

}

 )

 const newSlice = createSlice(  { 

   
   name: "news",
   initialState,
   reducers: {
     clearNews :(state)=> {
       state.news = []
      },
    },
    //!createAsyncThunk metotu bir middleware olarak API gibi dış kaynaklı isteklerin redux ortamında oluşturulkmasını sağlar. Ancak API deki durumlara göre statlern güncellenöesini sağlamaz. Bunun için extraREducers kısmı kullanılır
    
    //! API isteklerinde 3 farklı durum meydana gelir 
    //!1-pending başarılı bitme
    //!2-fulfilled başarısız bitme
    //!3-rejected başarısısz bitme
    extraReducers: (builder) => {
      builder.addCase( (getNews.pending, (state) =>{ 
        state.loading = true
      }))
      .addCase(getNews.fulfilled, (state, action)=> {
        state.news = action.payload
    state.loading = false
  })
  .addCase(getNews.rejected, (state)=> {
    state.error = true
    state.loading = false
  })
} 
});

export const {clearNews} = newSlice.actions

export default newSlice.reducer