import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import mainTableReducer from '../components/Content/reducers/index';

export default configureStore({
  reducer: {
    compareTable: mainTableReducer,
  },
  middleware: [thunk]
});
