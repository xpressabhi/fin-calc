import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCommentsQuery } from '../features/commentsSlice';
import Comment from './Comment';

const Comments = () => {
	const { id } = useParams();
	const { data: commments, error, isLoading } = useGetCommentsQuery(id);
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div>
			<h2>Comments</h2>
			{commments.map((c) => (
				<Comment key={c.id} {...c} />
			))}
		</div>
	);
};

export default Comments;
