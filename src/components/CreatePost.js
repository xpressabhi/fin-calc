import React, { useState } from 'react';
import { useCreatePostMutation } from '../features/postsSlice';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [createPost] = useCreatePostMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createPost({ title, body });
		setTitle('');
		setBody('');
	};

	return (
		<div className='card'>
			<div className='card-header'>Create Post</div>
			<div className='card-body'>
				<form onSubmit={handleSubmit}>
					<h2>Create Post</h2>
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Title'
					/>
					<textarea
						value={body}
						onChange={(e) => setBody(e.target.value)}
						placeholder='Body'
					/>
					<button type='submit'>Add Post</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePost;
