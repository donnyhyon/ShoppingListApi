import { createSlice } from "@reduxjs/toolkit";

export const shoppingListApiSlice = createSlice({
   name: 'shoppingListApi',
   initialState: {
    items: {},
   }
})