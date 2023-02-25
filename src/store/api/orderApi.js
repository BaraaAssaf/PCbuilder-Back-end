import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const orderApi = createApi({
  reducerPath: 'order',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/order',
  }),
  endpoints(builder) {
    return {
        fetchOrder: builder.query({
          providesTags:['order'],
            query: () => {
              return {
                url: '/',
                method: 'GET'
              };
            },
          }),
          chartData: builder.query({
              query: () => {
                return {
                  url: '/report',
                  method: 'GET'
                };
              },
            }),
            statistics: builder.query({
                  query: () => {
                    return {
                      url: '/statistics',
                      method: 'GET'
                    };
                  },
                }),
          fetchOrderByID: builder.query({
              query: (order) => {
                console.log(order)
                return {
                  url: `/${order.ID}`,
                  method: 'GET'
                };
              },
            }),
          updateOrderStatus: builder.mutation({
            invalidatesTags:['order'],
            query: (order) => {
              return {
                url: `/${order.ID}`,
                method: 'PUT',
                body : 
                {
                    statue :order.status
                }
              };
            },
          }),
    };
  },
});

export const {
    useFetchOrderQuery,
    useUpdateOrderStatusMutation,
    useFetchOrderByIDQuery,
    useChartDataQuery,
    useStatisticsQuery
} = orderApi;
export { orderApi };
