import { configureStore } from '@reduxjs/toolkit';

import userLorem from '../features/userSlice';
import loremSlice from '../features/lorem/loremSlice';


export const store = configureStore({
  reducer: {
    lorem:loremSlice.reducer,
   user:userLorem.reducer
  },
});
