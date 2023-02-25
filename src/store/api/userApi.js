import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/users',
  }),
  endpoints(builder) {
    return {
        fetchUsers: builder.query({
            query: () => {
              return {
                url: '/',
                method: 'GET'
              };
            },
          }),
   
    };
  },
});

export const {
    useFetchUsersQuery,
} = userApi;
export { userApi };
