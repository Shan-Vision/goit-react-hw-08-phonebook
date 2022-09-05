import contactsOperations from './contacts-operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducer: {
    filterSet(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [contactsOperations.addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
    },
    [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
    },
    [contactsOperations.updateContact.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(item => item.id === payload);
      state.items[index] = payload;
      state.isLoading = false;
    },
  },
});

export const { filterSet } = contactSlice.actions;

export default contactSlice.reducer;
