import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { filteredContactSlice } from './filtereSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filteredContactSlice.name]: filteredContactSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
