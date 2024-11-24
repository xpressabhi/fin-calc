import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API service
export const commentsSlice = createApi({
	reducerPath: 'commentsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	endpoints: (builder) => ({
		getComments: builder.query({
			query: (id) => `comments?postId=${id}`,
		}),
	}),
});

export const { useGetCommentsQuery } = commentsSlice;
