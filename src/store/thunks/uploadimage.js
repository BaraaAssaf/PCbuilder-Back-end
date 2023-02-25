import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const updateUser = createAsyncThunk('Auth/updateUser', async (arg ) => {
  const response =  axios.post(`http://localhost:3000/users/upload/${JSON.parse(Cookies.get('userinfo'))[0].ID}`, arg )
  return response;
});

export { updateUser };