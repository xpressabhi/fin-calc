import React from 'react';

const Cell = ({ data = 'x', row, col, setData }) => {
	return (
		<div
			style={{
				height: '100px',
				width: '100px',
				border: '2px solid red',
				cursor: 'pointer',
			}}
			className='d-flex align-items-center justify-content-center'
			onClick={() => setData(row, col)}
		>
			{data}
		</div>
	);
};

export default Cell;
