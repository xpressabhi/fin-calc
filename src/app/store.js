import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from '../features/postsSlice';
import { commentsSlice } from '../features/commentsSlice';
import { cryptoSlice } from '../features/cryptoSlice';

export const store = configureStore({
	reducer: {
		[postsSlice.reducerPath]: postsSlice.reducer,
		[commentsSlice.reducerPath]: commentsSlice.reducer,
		[cryptoSlice.reducerPath]: cryptoSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			postsSlice.middleware,
			commentsSlice.middleware,
			cryptoSlice.middleware,
		),
});
