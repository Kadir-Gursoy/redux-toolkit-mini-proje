import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:"",
}
//!slice ile bir gloaal statein hem action typeları hem action creater fonsiyonları hem de reduceri tek bir hamlede oluşturabilirz.
const authSlice = createSlice({
name: "auth",                           //!action type oluşturma
initialState: initialState,             //1statein başlangıç değeri içiçn    
reducers: {
    //1action creator fonk ve reducer için
    setUser: (state, action) => {
        // setUser: function(state, action) {}
        state.user = action.payload
    },

    clearUser : (state, action) => {
    state.user = ""
}
 }
})

//!oluşan action fonksiyonları sliceAdi.actions dan destr. edilecrek export edilir.

export const {setUser, clearUser} = authSlice.actions

//! yazılan slice'in reducer ise sliceAdi.reducer seklinde export edilmelidir
export default authSlice.reducer