import { configureStore } from '@reduxjs/toolkit';

// slice
import member from './slice/member';
import modal from './slice/modal';
import log from './slice/log';

const store = configureStore({
  reducer: {
    userSlice: member,
    modalSlice: modal,
    logSlice: log
  }
});

export default store;
