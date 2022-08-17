// import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

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
