import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUserbyID = createAsyncThunk('Auth/getUserbyID', async (arg) => {
  const response = await axios.get(`http://localhost:3000/users/${arg}`)
    // DEV ONLY!!!
    await pause(1000);
    localStorage.setItem("userinfo", JSON.stringify(response.data));
  return response.data;
});

// DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };
export { getUserbyID };