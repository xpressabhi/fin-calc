import { Link } from 'react-router-dom';

const Comment = ({ name, body, email, id, postId }) => {
	return (
		<div className='card mb-3'>
			<div className='card-body'>{body}</div>
			<div className='card-footer d-flex justify-content-between'>
				<span>{name}</span>
				<Link to={`mailto:${email}`}>{email}</Link>
			</div>
		</div>
	);
};

export default Comment;
