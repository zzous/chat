import { configureStore } from '@reduxjs/toolkit';

// slice
import member from './slice/member';
import modal from './slice/modal';
import log from './slice/log';
import chat from './slice/chat';

const store = configureStore({
  reducer: {
    userSlice: member,
    modalSlice: modal,
    logSlice: log,
    chatSlice: chat
  }
});

export default store;
