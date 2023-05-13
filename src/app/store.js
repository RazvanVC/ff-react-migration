import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducers/dataReducer'
import cartReducer from '../reducers/cartReducer'

export const store = configureStore({
  reducer: combineReducers({
    data: dataReducer,
    cart: cartReducer,
  }),
});
