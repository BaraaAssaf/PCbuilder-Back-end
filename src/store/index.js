import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { productApi } from './api/productApi';
import { orderApi } from './api/orderApi';
import { userApi } from './api/userApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactusApi } from './api/contactusApi';
import { testimonialApi } from './api/testimonialApi';
import { CartApi } from './api/CartApi';

export const store = configureStore({
  reducer: {
    Auth: usersReducer,
    [productApi.reducerPath]: productApi.reducer,
    [CartApi.reducerPath]: CartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [contactusApi.reducerPath]: contactusApi.reducer,
    [testimonialApi.reducerPath]: testimonialApi.reducer,


  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(productApi.middleware)
    .concat(CartApi.middleware)
    .concat(orderApi.middleware)
    .concat(userApi.middleware) 
    .concat(contactusApi.middleware)
    .concat(testimonialApi.middleware);

  },
});

window.store =store;
setupListeners(store.dispatch);
export * from './thunks/login';
export * from './thunks/verifyUser';
export * from './thunks/resendVerify';
export * from './thunks/registerUser';
export * from './thunks/getUserbyID';
export * from './thunks/ChangePassword';

export * from './thunks/updateUser';
export {
  useFetchProductQuery,
  useUploadimageProductMutation,
  useCreateProductMutation,
  useRemoveProductMutation,
  useEditProductMutation
  
} from './api/productApi';
export {
  useFetchOrderQuery,
  useUpdateOrderStatusMutation,
  useFetchOrderByIDQuery,
  useChartDataQuery,
  useStatisticsQuery
} from './api/orderApi';
export {
  useFetchCartQuery,
  useAddCartMutation,
  useUpdateQuntityMutation,
  useConfirmOrderMutation,
  useCountCartQuery

} from './api/CartApi';

export {
  useFetchUsersQuery,
} from './api/userApi';

export {
  useCreateTestimonialMutation,
  useEditTestimonialMutation,
  useFetchTestimonialQuery,
  useFetchshowTestimonialQuery
} from './api/testimonialApi';
export {
  useCreateContactUsMutation,
  useFetchContactUsQuery,
  useRemoveContactUsMutation
} from './api/contactusApi';


