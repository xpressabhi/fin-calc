import React, { useState } from 'react';
import { useGetPostsQuery } from '../features/postsSlice';
import Post from './Post';
import Pagination from './Pagination';
const PAGE_SIZE = 10;

const PostList = () => {
	const [page, setPage] = useState(0);
	const { data: posts, error, isLoading } = useGetPostsQuery();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			<h1>Posts({posts.length})</h1>
			{posts.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1)).map((post) => (
				<Post key={post.id} {...post} />
			))}
			<Pagination
				size={posts.length}
				pageSize={PAGE_SIZE}
				page={page}
				setPage={setPage}
			/>
		</div>
	);
};

export default PostList;
