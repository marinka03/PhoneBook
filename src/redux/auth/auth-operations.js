import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import styled from 'styled-components';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const StyledCustom = styled('div')`
  text-decoration: none;
  color: #a88c67;
  background-color: aliceblue;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
`;

export const createNewUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue('Oops');
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      toast.success(`Welcome ${data.user.name}!`);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue('Oops');
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    toast.success('Bye.');
    return data;

  } catch (error) {
    return thunkAPI.rejectWithValue('Oops');
  }
});

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return;
    }
    token.set(persistToken);
    try {
      const {data} = await axios.get('/users/current');
      return data;

    } catch (e) {
     return toast.custom(<StyledCustom>You are not authorized.</StyledCustom>);
    }
  }
);
