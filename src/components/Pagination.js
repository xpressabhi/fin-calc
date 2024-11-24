const classNames = require('classnames');

const Pagination = ({ size, pageSize, page, setPage }) => {
	const remainingPages = Math.ceil(size / pageSize) - page;

	return (
		<nav aria-label='Page navigation example'>
			<ul className='pagination'>
				<li className={classNames('page-item', { disabled: page === 0 })}>
					<button className='page-link' onClick={() => setPage((p) => p - 1)}>
						Previous
					</button>
				</li>
				{new Array(remainingPages > 5 ? 5 : remainingPages)
					.fill(0)
					.map((_, i) => (
						<li
							className={classNames('page-item', { disabled: i === 0 })}
							key={i}
						>
							<button
								className='page-link'
								onClick={() => setPage(page + i + 1)}
							>
								{page + i + 1}
							</button>
						</li>
					))}
				<li
					className={classNames('page-item', {
						disabled: remainingPages === 1,
					})}
				>
					<button className='page-link' onClick={() => setPage((p) => p + 1)}>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
