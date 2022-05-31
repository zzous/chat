import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  // # Default
  name: 'User',
  // # State
  initialState: {
    status: false
  },
  reducers: {
    setUserStatus: (state, action) => {
      state.status = action.payload;
    }
  }
});

// # State
export const userStatus = ({ userSlice }) => userSlice.status;

// # Actions
export const {
  setUserStatus
} = userSlice.actions;

// # Reducer
export default userSlice.reducer;
