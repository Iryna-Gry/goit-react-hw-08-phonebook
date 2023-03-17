import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/slice';
import { contactSlice } from './contacts/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './user/slice';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userSlice.reducer),
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
