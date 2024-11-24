import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetPostQuery } from '../features/postsSlice';
import Post from './Post';
import Comments from './Comments';

const PostDetails = () => {
	const { id } = useParams();
	const { data: post, error, isLoading } = useGetPostQuery(id);
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<>
			<Post {...post} />
			<Link to={'/posts'}>Back to posts</Link>
			<Comments />
		</>
	);
};

export default PostDetails;
