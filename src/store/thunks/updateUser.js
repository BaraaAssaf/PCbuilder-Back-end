import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const updateUser = createAsyncThunk('Auth/updateUser', async (arg ) => {
  const response =  await axios.put(`http://localhost:3000/users/${JSON.parse(localStorage.getItem('userinfo'))[0].ID}`, arg)

  return response;
});

const updateimage = createAsyncThunk('Auth/updateimage', async (arg ) => {
  const response =  axios.post(`http://localhost:3000/users/upload/${JSON.parse(localStorage.getItem('userinfo'))[0].ID}`, arg )
         
  return response;
});

export { updateUser , updateimage};