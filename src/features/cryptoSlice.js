import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API service
export const cryptoSlice = createApi({
	reducerPath: 'bitcoinApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.coincap.io/v2',
	}),
	endpoints: (builder) => ({
		getAssets: builder.query({
			query: () => `/assets`,
		}),
	}),
});

export const { useGetAssetsQuery } = cryptoSlice;
