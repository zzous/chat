import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  // # Default
  name: 'Chat',
  // # State
  initialState: {
    messages: []
  },
  reducers: {
    setSaveMessages: (state, action) => {
      console.log('## action', action.payload);
      // localStorage.setItem('CHAT_SAVED_MESSAGES', action.payload);
      const _message = {
        date: new Date(),
        message: action.payload
      };
      const isExist = state.messages.filter(d => d.message === action.payload).length > 0 ? true : false;
      if (isExist) {
        state.messages = action.payload;
      }
      // console.log(state.messages, getSavedMessage());
    }
  }
});

// function getSavedMessage() {
//   console.log('## get item', localStorage.getItem('CHAT_SAVED_MESSAGES'));
//   const _message = localStorage.getItem('CHAT_SAVED_MESSAGES');
//   return _message !== null ? JSON.parse(serialisedState) : undefined;
// }

// # State
export const savedMessages = ({ chatSlice }) => chatSlice.messages;

// # Actions
export const {
  setSaveMessages
} = chatSlice.actions;

// # Reducer
export default chatSlice.reducer;
