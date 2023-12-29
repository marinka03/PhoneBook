import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenStr = state.auth.token;
    token.set(tokenStr);
    try {
      const response = await axios.get('/contacts');
      if (response.status === 404) {
        return toast.error('Something happened!');
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenStr = state.auth.token;
    token.set(tokenStr);
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idEl, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenStr = state.auth.token;
    token.set(tokenStr);
    try {
      const { data } = await axios.delete(`/contacts/${idEl}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
