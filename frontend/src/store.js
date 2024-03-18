import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import shoppingListSlice from './shoppingListSlice'

export default configureStore({
        reducer: {
            counter: counterReducer,
            shoppingList: shoppingListSlice,
    },
})
