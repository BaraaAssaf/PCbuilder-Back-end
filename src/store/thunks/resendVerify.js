import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const resendVerify = createAsyncThunk('Auth/resendVerify', async (arg) => {
  const resend =  await axios.post('http://localhost:3000/users/resend', arg)
  console.log(resend)
  return resend;
});

export { resendVerify };
