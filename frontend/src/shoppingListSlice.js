import { createSlice } from "@reduxjs/toolkit";

export const shoppingListSlice = createSlice({
   name: 'shoppingList',
   initialState: {
    items: {
      a1: {
         id: "a1",
         quantity: 12,
         name: "chocolates",
         unit: "kg",
      }
    },
   },
   reducers : {
      deleteItem: (state, action) => {
         const newItems = {...state};
         delete newItems[action.payload];
         return newItems;
      }


   }
})


export default shoppingListSlice.reducer
