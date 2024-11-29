import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import * as Icon from 'react-bootstrap-icons';

const Table = ({ classname, header = [], data = [] }) => {
	const [sortKey, setSortKey] = useState('');
	const [order, setOrder] = useState('ASC');
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
	return (
		<div>
			<table className={classNames('table', classname)}>
				<thead>
					<tr>
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
					{data.toSorted(sortBy).map((d) => (
						<tr key={d.id}>
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
