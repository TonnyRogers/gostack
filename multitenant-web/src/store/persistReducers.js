import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'multitenantapp',
      storage,
      whitelist: ['auth', 'teams'],
    },
    reducers
  );

  return persistedReducer;
};
