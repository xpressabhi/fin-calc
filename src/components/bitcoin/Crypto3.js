import React, { useState } from 'react';
import { useGetAssetsQuery } from '../../features/cryptoSlice';
import TableFilter from '../table/TableFilter';
import * as Icon from 'react-bootstrap-icons';
import millify from 'millify';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the Data Grid

const Crypto3 = () => {
	const { data, isFetching } = useGetAssetsQuery(0, {
		pollingInterval: 5000,
		skipPollingIfUnfocused: true,
	});
	console.log(data);
	const [col, setCol] = useState([
		{
			field: 'rank',
			filter: true,
			headerName: '#',
			valueParser: (params) => Number(params.newValue),
		},
		{
			field: 'name',
			headerName: 'Name',
			cellDataType: 'text',
			filter: 'agTextColumnFilter',
		},
		{
			field: 'priceUsd',
			headerName: 'Price',
			type: 'numericColumn',
			filter: 'agNumberColumnFilter',
			valueGetter: (p) => {
				return '$' + p.data.priceUsd;
			},
		},
		{ field: 'changePercent24Hr', type: 'numericColumn' },
		{ field: 'marketCapUsd' },
		{ field: 'volumeUsd24Hr' },
		{ field: 'vwap24Hr' },
		{ field: 'maxSupply' },
	]);
	const pagination = true;
	const paginationPageSize = 10;
	const paginationPageSizeSelector = [200, 500, 1000];
	// if (isFetching) return <div>Fetching data</div>;
	return (
		<div>
			<h1>
				Real time data fetched at{' '}
				{new Date(data?.timestamp).toLocaleTimeString()}{' '}
				{isFetching && (
					<div className='spinner-grow text-success' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				)}
			</h1>
			<div className='ag-theme-quartz' style={{ height: 500 }}>
				<AgGridReact
					rowData={data?.data || []}
					columnDefs={col}
					pagination={pagination}
					paginationPageSize={paginationPageSize}
					paginationPageSizeSelector={paginationPageSizeSelector}
				/>
			</div>
		</div>
	);
};

export default Crypto3;
