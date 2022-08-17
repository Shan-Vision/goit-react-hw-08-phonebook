// import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const initialItems = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: initialItems, filter: '' },
//   reducers: {
//     addContact: (state, { payload }) => {
//       state.items.push(payload);
//     },
//     removeContact: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     filterByName: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, removeContact, filterByName } =
//   contactsSlice.actions;

const persistConfig = {
  key: 'pokemon',
  storage,
  whitelist: ['items'],
};

// ** Selectors
// export const getContacts = state => state.contacts.items;
// export const getFilterKit = state => state.contacts.filter;

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fab4f03c4f110faa9e6d48.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query(newContact) {
        const { name, email, phone } = newContact;
        return {
          url: `contacts/`,
          method: 'POST',
          body: {
            name,
            phone,
            email,
          },
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

export const persistedReducer = persistReducer(
  persistConfig,
  contactsApi.reducer
);
