import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BASE_URL =
//   'https://657c52ad853beeefdb9931de.mockapi.io/contacts/contacts';

// const getOption = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const currentUser = createAsyncThunk(
  'contacts/currentUser',
  async (userObj, thunkAPI) => {
    try {
      const { data } = await axios.get('/users/current');
      token.set(userObj.token);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (userObj, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      if (response.status === 404) {
        return thunkAPI.rejectWithValue('Something happened!');
      }
      token.set(userObj.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      // const response = await fetch(`${BASE_URL}`, {
      //   method: 'POST',
      //   body: JSON.stringify(newContact),
      //   headers: {
      //     'Content-Type': 'application/json; charset=UTF-8',
      //   },
      // });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idEl, thunkAPI) => {
    try {
      // const response = await fetch(`${BASE_URL}/${idEl}`, {
      //   method: 'DELETE',
      // });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
