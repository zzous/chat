import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  // # Default
  name: 'Modal',
  // # State
  initialState: {
    status: false
  },
  reducers: {
    setModalStatus: (state, action) => {
      state.status = action.payload;
    }
  }
});

// # State
export const modalStatus = ({ modalSlice }) => modalSlice.status;

// # Actions
export const {
  setModalStatus
} = modalSlice.actions;

// # Reducer
export default modalSlice.reducer;
