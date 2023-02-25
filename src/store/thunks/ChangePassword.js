import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ChangePassword = createAsyncThunk('Auth/ChangePassword', async (arg ) => {
  const response =  await axios.post(`http://localhost:3000/users/change`, arg)
   
      return response.data;
});



export { ChangePassword};