import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  // # Default
  name: 'Chat',
  // # State
  initialState: {
    messages: []
  },
  reducers: {
    initMessages: (state, action) => {
      state.messages = action.payload;
    },
    setSaveMessages: (state, action) => {
      // console.log('## action', action.payload);
      const _message = {
        date: new Date(),
        txt: action.payload
      };
      if (action.payload === '안녕' || action.payload === '수고' || action.payload === '로그(토글)') return;
      const isExist = state.messages.filter(d => d.txt === action.payload).length > 0 ? true : false;
      if (!isExist) state.messages.push(_message);
  
      localStorage.setItem('CHAT_SAVED_MESSAGES', JSON.stringify(state.messages));
    },
    deleteMessage: (state, action) => {
      state.messages.splice(action.payload, 1);
      localStorage.setItem('CHAT_SAVED_MESSAGES', JSON.stringify(state.messages));
    }
  }
});

// # State
export const savedMessages = ({ chatSlice }) => chatSlice.messages;

// # Actions
export const {
  initMessages,
  setSaveMessages,
  deleteMessage
} = chatSlice.actions;

// # Reducer
export default chatSlice.reducer;
