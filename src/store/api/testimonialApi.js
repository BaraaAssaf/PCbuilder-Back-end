import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const testimonialApi = createApi({
  reducerPath: 'testimonial',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/testimonial',
  }),
  endpoints(builder) {
    return {
        fetchTestimonial: builder.query({
          providesTags:['testimonial'],
            query: () => {
              return {
                url: '/',
                method: 'GET'
              };
            },
          }),
          fetchshowTestimonial: builder.query({
              query: () => {
                return {
                  url: '/show',
                  method: 'GET'
                };
              },
            }),
          
          editTestimonial: builder.mutation({
            invalidatesTags:['testimonial'],
            query: (formValue) => {
              return {
                url: `/${formValue.ID}`,
                method: 'PUT',
                body : formValue
              };
            },
          }),
          createTestimonial: builder.mutation({
           
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
      useCreateTestimonialMutation,
      useFetchTestimonialQuery,
      useEditTestimonialMutation,
      useFetchshowTestimonialQuery
} = testimonialApi;
export { testimonialApi };
