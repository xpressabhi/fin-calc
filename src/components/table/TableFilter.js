import React from 'react';
import Table from './Table';

const TableFilter = ({ filters, ...rest }) => {
	const { data } = rest;
	return (
		<div>
			<div>Filters</div>
			<Table {...rest} />
		</div>
	);
};

export default TableFilter;
