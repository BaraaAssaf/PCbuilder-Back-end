import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const productApi = createApi({
  reducerPath: 'pruduct',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/product',
  }),
  endpoints(builder) {
    return {
        fetchProduct: builder.query({
          providesTags:['product'],
            query: () => {
              return {
                url: '/',
                method: 'GET'
              };
            },
          }),
          
          editProduct: builder.mutation({
            invalidatesTags:['product'],
            query: (formValue) => {
              return {
                url: `/${formValue.ID}`,
                method: 'PUT',
                body : formValue
              };
            },
          }),

          removeProduct: builder.mutation({
            invalidatesTags:['product'],
            query: (id) => {
              return {
                url: `/${id}`,
                method: 'DELETE'
              };
            },
          }),

          createProduct: builder.mutation({
            invalidatesTags:['product'],
            query: (formValue) => {
              return {
                url: '/',
                method: 'POST',
                body: formValue,
              };
            },
          }),

          uploadimageProduct: builder.mutation({
            invalidatesTags:['product'],
            query: (imagefile) => {
              return {
                url: `/upload/${imagefile.productid}`,
                method: 'POST',
                body:  imagefile.formData
              ,
              };
            },
          }),
    };
  },
});

export const {
    useFetchProductQuery,
    useUploadimageProductMutation,
    useCreateProductMutation,
    useRemoveProductMutation,
    useEditProductMutation
} = productApi;
export { productApi };
