import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { addContact, deleteContact, getAllContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error(`Ooops, please try again later.`);
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.fulfilled, (state, { payload = [] }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getAllContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
