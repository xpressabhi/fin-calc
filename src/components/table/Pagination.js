import React, { useCallback, useState, useMemo, useEffect } from 'react';
import classNames from 'classnames';

const Pagination = ({
	page,
	setPage,
	size,
	length,
	customPageSize,
	setCustomPageSize,
}) => {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<nav aria-label='Page navigation example'>
				<ul className='pagination'>
					<li className={classNames('page-item', { disabled: page === 0 })}>
						<a className='page-link' href='#' onClick={() => setPage(0)}>
							First
						</a>
					</li>
					<li className={classNames('page-item', { disabled: page === 0 })}>
						<a
							className='page-link'
							href='#'
							onClick={() => setPage((p) => p - 1)}
						>
							Previous
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							{page + 1}
						</a>
					</li>
					{/* {page === 0 && (
              <li className='page-item'>
                  <a
                      className='page-link'
                      href='#'
                      onClick={() => setPage((p) => p + 1)}
                  >
                      {page + 1}
                  </a>
              </li>
          )}
          <li className='page-item'>
              <a
                  className='page-link'
                  href='#'
                  onClick={() => setPage((p) => p + 3)}
              >
                  {page + 2}
              </a>
          </li>
          {page < Math.floor(filteredData.length / pageSize) && (
              <li className='page-item'>
                  <a
                      className='page-link'
                      href='#'
                      onClick={() => setPage((p) => p + 3)}
                  >
                      {page + 3}
                  </a>
              </li>
          )} */}
					<li
						className={classNames('page-item', {
							disabled: page === Math.floor(length / customPageSize) - 1,
						})}
					>
						<a
							className='page-link'
							href='#'
							onClick={() => setPage((p) => p + 1)}
						>
							Next
						</a>
					</li>
					<li
						className={classNames('page-item', {
							disabled: page === Math.floor(length / customPageSize) - 1,
						})}
					>
						<a
							className='page-link'
							href='#'
							onClick={() => setPage(Math.floor(length / customPageSize) - 1)}
						>
							Last
						</a>
					</li>
				</ul>
			</nav>
			<div class='btn-group' role='group' aria-label='Basic outlined example'>
				{[5, 10, 20, 50, 100, 500].map((size) => (
					<button
						type='button'
						class='btn btn-outline-primary'
						onClick={() => setCustomPageSize(size)}
					>
						{size}
					</button>
				))}
			</div>
		</div>
	);
};

export default Pagination;
