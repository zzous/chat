import { configureStore } from '@reduxjs/toolkit';

// slice
import modal from './slice/modal';
import log from './slice/log';

const store = configureStore({
  reducer: {
    modalSlice: modal,
    logSlice: log
  }
});

export default store;
