import { createSlice } from '@reduxjs/toolkit';

export const filteredContactSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilterContact(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterContact } = filteredContactSlice.actions;

export const getFilterContact = state => state.filter.value;

export default filteredContactSlice.reducer;