import React from 'react';
import { Link } from 'react-router-dom';
import { useDeletePostMutation } from '../features/postsSlice';

const Post = ({ id, title, body }) => {
	const [deletePost] = useDeletePostMutation();
	return (
		<div className='card my-2 shadow-lg border-0'>
			<div className='card-header'>
				<h3>{title}</h3>
			</div>
			<div className='card-body'>
				<p>{body}</p>
				<Link to={`/posts/${id}`} className='btn btn-primary mx-2'>
					Open it {id}
				</Link>
				<button className='btn btn-danger' onClick={() => deletePost(id)}>
					Delete it
				</button>
			</div>
		</div>
	);
};

export default Post;
