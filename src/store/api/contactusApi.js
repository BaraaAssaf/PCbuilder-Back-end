import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const contactusApi = createApi({
  reducerPath: 'contactus',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/contactus',
  }),
  endpoints(builder) {
    return {
        fetchContactUs: builder.query({
          providesTags:['contactus'],
            query: () => {
              return {
                url: '/',
                method: 'GET'
              };
            },
          }),
          
          removeContactUs: builder.mutation({
            invalidatesTags:['contactus'],
            query: (id) => {
              return {
                url: `/${id}`,
                method: 'DELETE'
              };
            },
          }),

          createContactUs: builder.mutation({
            query: (formValue) => {
              return {
                url: '/',
                method: 'POST',
                body: formValue,
              };
            },
          }),


    };
  },
});

export const {
useFetchContactUsQuery,
useCreateContactUsMutation,
useRemoveContactUsMutation
} = contactusApi;
export { contactusApi };
