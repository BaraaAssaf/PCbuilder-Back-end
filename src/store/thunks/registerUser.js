import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
const registerUser = createAsyncThunk('users/registerUser', async (arg) => {
  const response = await axios.post('http://localhost:3000/users/sginup', arg)
if(!(response.data.status === 400))
  Cookies.set('token',response.data, { expires: 7 })

  return response.data;
});



export { registerUser };
