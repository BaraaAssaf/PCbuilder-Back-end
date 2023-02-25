import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CartApi = createApi({
  reducerPath: 'cart',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['Item'],
  endpoints(builder) {
    return {
        fetchCart: builder.query({
            query: (userid) => {
              return {
                url: `/cart/${userid}`,
                method: 'GET',
              };
            },
            providesTags:['Item' , 'Add'],
          }),
          countCart: builder.query({
            query: (userid) => {
              return {
                url: `/cart/count/${userid}`,
                method: 'GET',
              };
            },
            providesTags:['Add'],
          }),
          addCart: builder.mutation({
            invalidatesTags:['Add'],
            query: (item) => {
              return {
                url: '/cart',
                method: 'POST',
                body: {
                    "userid": item.userid,
                    "productid" : item.productid,
                    "quntity" : 1
                },
              };
            },
          }),
          updateQuntity: builder.mutation({
            invalidatesTags:['Item'],
            query: (item) => {
              return {
                url: `/cart/${item.ID}`,
                method: 'PUT',
                body: {
                    "quntity" : item.quntity
                },
              };
            },
          }),
          confirmOrder: builder.mutation({
            invalidatesTags:['Item'],
            query: (confirmdata) => {
              return {
                url: `/order/confirm`,
                method: 'POST',
                body: {
                  visanumber: confirmdata.visanumber,
                  security_code: confirmdata.security_code,
                  LocationDelivery: confirmdata.LocationDelivery,
                  TotalPrice:confirmdata.TotalPrice,
                  user_id: confirmdata.user_id,
                },
              };
            },
          }),
    };
  },
});

export const {
    useFetchCartQuery,
    useAddCartMutation,
    useUpdateQuntityMutation,
    useConfirmOrderMutation,
    useCountCartQuery,
} = CartApi;
export { CartApi };
