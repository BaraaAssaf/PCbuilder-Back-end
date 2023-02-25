import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const login = createAsyncThunk('Auth/login', async (arg) => {
  const r = await axios.post('http://localhost:3000/users/login', arg)

  if(r.data.status === 400){
      return r.data;
  }
  else{ Cookies.set('token',r.data, { expires: 7 });
  const decode = jwt_decode(Cookies.get('token'));

  const response = await axios.get(`http://localhost:3000/users/${decode.token.user_id}`)
  localStorage.setItem("userinfo", JSON.stringify(response.data));
   return decode;
}
     
});

export { login };
