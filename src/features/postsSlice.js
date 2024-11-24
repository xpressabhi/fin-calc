import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API service
export const postsSlice = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => 'posts',
		}),
		getPost: builder.query({
			query: (id) => `posts/${id}`,
		}),
		createPost: builder.mutation({
			query: (newPost) => ({
				url: 'posts',
				method: 'POST',
				body: newPost,
			}),
		}),
		updatePost: builder.mutation({
			query: ({ id, ...updatedPost }) => ({
				url: `posts/${id}`,
				method: 'PUT',
				body: updatedPost,
			}),
		}),
		deletePost: builder.mutation({
			query: (id) => ({
				url: `posts/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetPostsQuery,
	useGetPostQuery,
	useCreatePostMutation,
	useUpdatePostMutation,
	useDeletePostMutation,
} = postsSlice;
