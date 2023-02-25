import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const verifyUser = createAsyncThunk('Auth/verifyUser', async (arg) => {
  const verify =  await axios.post('http://localhost:3000/users/Verfiy', arg)
  return verify;
});

export { verifyUser };
