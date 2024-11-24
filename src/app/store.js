import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from '../features/postsSlice';
import { commentsSlice } from '../features/commentsSlice';

export const store = configureStore({
	reducer: {
		[postsSlice.reducerPath]: postsSlice.reducer,
		[commentsSlice.reducerPath]: commentsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			postsSlice.middleware,
			commentsSlice.middleware,
		),
});
