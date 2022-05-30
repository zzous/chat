import { createSlice } from '@reduxjs/toolkit';

export const logSlice = createSlice({
  // # Default
  name: 'Modal',
  // # State
  initialState: {
    status: false,
    type: null
  },
  reducers: {
    setLogStatus: (state, action) => {
      state.status = action.payload;
    },
    setLogType: (state, action) => {
      state.type = action.payload;
    }
  }
});

// # State
export const logStatus = ({ logSlice }) => logSlice.status;
export const logType = ({ logSlice }) => logSlice.type;

// # Actions
export const {
  setLogStatus,
  setLogType
} = logSlice.actions;

// # Reducer
export default logSlice.reducer;
