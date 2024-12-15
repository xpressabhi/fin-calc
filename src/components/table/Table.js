/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState, useMemo, useEffect } from 'react';
import classNames from 'classnames';
import * as Icon from 'react-bootstrap-icons';
import Pagination from './Pagination';

const useDebouncedValue = (inputValue, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(inputValue);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(inputValue);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [inputValue, delay]);

	return debouncedValue;
};

const Table = ({
	classname,
	header = [],
	data = [],
	pagination = false,
	pageSize = 10,
}) => {
	const [showInlineFilters, setShowInlineFilters] = useState(true);
	const [sortKey, setSortKey] = useState('');
	const [order, setOrder] = useState('ASC');
	const [filters, setFilters] = useState({});
	const [page, setPage] = useState(0);
	const [filteredData, setFilteredData] = useState([]);
	const [customPageSize, setCustomPageSize] = useState(pageSize);
	const debouncedFilters = useDebouncedValue(filters, 500);
	const sortBy = useCallback(
		(a, b) => {
			if (order === 'ASC') {
				return a[sortKey] - b[sortKey];
			} else {
				return b[sortKey] - a[sortKey];
			}
		},
		[sortKey, order],
	);
	useEffect(() => {
		setPage(0);
		console.log(debouncedFilters);
		let newData = [...data];
		Object.entries(debouncedFilters).forEach(([key, value]) => {
			if (!value || value.length === 0) return;
			newData = newData.filter((row) =>
				row[key].toLowerCase().includes(value.toLowerCase()),
			);
		});
		setFilteredData(newData);
	}, [debouncedFilters, data]);

	useEffect(() => {
		setFilters({});
	}, [showInlineFilters]);
	if (pagination) {
	}

	return (
		<div>
			{pagination && (
				<Pagination
					size={pageSize}
					length={filteredData.length}
					{...{ page, setPage, customPageSize, setCustomPageSize }}
				/>
			)}
			<table className={classNames('table', classname)}>
				<thead>
					<tr>
						<th>
							<button
								className='btn btn-outline-primary'
								onClick={() => setShowInlineFilters((t) => !t)}
							>
								<Icon.Search />
							</button>
						</th>
						{header.map((h) => (
							<th
								key={h.key}
								className={classNames(h.classname)}
								onClick={() => {
									setSortKey(h.key);
									setOrder((s) => (s === 'ASC' ? 'DSC' : 'ASC'));
								}}
							>
								{h.label}{' '}
								{sortKey === h.key && sortKey !== 'name' && (
									<>
										{order === 'ASC' ? (
											<Icon.CaretDownFill />
										) : (
											<Icon.CaretUpFill />
										)}
									</>
								)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{showInlineFilters && (
						<tr>
							{' '}
							<td></td>
							{header.map((h) => (
								<th key={h.key} className='p-2'>
									<input
										type='text'
										className='form-control'
										onChange={(e) => {
											const val = e.target.value;
											setFilters((filters) => {
												if (val?.length) {
													return { ...filters, [h.key]: val };
												} else {
													const { [h.key]: _, ...rest } = filters; // Use `_` to ignore the removed key
													return rest;
												}
											});
										}}
									/>
								</th>
							))}
						</tr>
					)}
					{filteredData
						.slice(
							pagination ? page * customPageSize : 0,
							pagination ? (page + 1) * customPageSize : data.length,
						)
						.toSorted(sortBy)
						.map((d) => (
							<tr key={d.id}>
								<td></td>
								{header.map((h) => (
									<td key={h.key} className={classNames(h.classname)}>
										{h.formatter ? h.formatter(d[h.key], d) : d[h.key]}
									</td>
								))}
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
