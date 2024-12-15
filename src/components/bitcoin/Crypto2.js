import { useGetAssetsQuery } from '../../features/cryptoSlice';
import * as Icon from 'react-bootstrap-icons';
import millify from 'millify';
import {
	useReactTable,
	flexRender,
	createColumnHelper,
	getCoreRowModel,
} from '@tanstack/react-table';
import React, { useState } from 'react';

const Crypto2 = () => {
	const { data, isFetching } = useGetAssetsQuery(0, {
		pollingInterval: 5000,
		skipPollingIfUnfocused: true,
	});

	console.log(data);
	const columnHelper = createColumnHelper();
	const columns = [
		columnHelper.accessor('rank', {
			cell: (info) => info.getValue(),
			header: () => <span>#</span>,
			footer: (info) => info.column.id,
		}),
		columnHelper.accessor('name', {
			cell: (info) => info.getValue(),
			header: () => <span>Name</span>,
			footer: (info) => info.column.id,
		}),
		columnHelper.accessor('priceUsd', {
			cell: (info) => '$' + Number.parseFloat(info.getValue()).toFixed(2),
			header: () => <span>Price</span>,
			footer: (info) => info.column.id,
		}),
		columnHelper.accessor('changePercent24Hr', {
			cell: (info) => {
				const num = Number.parseFloat(info.getValue()).toFixed(2);
				return info.getValue() >= 0 ? (
					<p className='text-success'>
						<Icon.CaretUpFill />
						{num}%
					</p>
				) : (
					<p className='text-danger'>
						<Icon.CaretDownFill /> {num * -1}%
					</p>
				);
			},
			header: () => <span>24h%</span>,
			footer: (info) => info.column.id,
		}),
		columnHelper.accessor('marketCapUsd', {
			cell: (info) => '$' + millify(info.getValue(), { precision: 2 }),
			header: () => <span>Market Cap</span>,
			footer: (info) => info.column.id,
		}),
		columnHelper.accessor('volumeUsd24Hr', {
			cell: (info) => '$' + millify(info.getValue(), { precision: 2 }),
			header: () => <span>Volume(24h)</span>,
			footer: (info) => info.column.id,
		}),
	];
	const columns2 = [
		{ label: '#', key: 'rank' },
		{
			label: 'Name',
			key: 'name',
			formatter: (value, row) => (
				<>
					<b className='display-6 text-truncate'>
						{value.length > 10 ? value.substr(0, 20) + '...' : value}
					</b>{' '}
					{row.symbol}
				</>
			),
		},
		{
			label: 'Price',
			key: 'priceUsd',
			formatter: (value) => '$' + Number.parseFloat(value).toFixed(2),
			classname: 'text-end',
		},
		{
			label: '24h%',
			key: 'changePercent24Hr',
			formatter: (value) => {
				const num = Number.parseFloat(value).toFixed(2);
				return value >= 0 ? (
					<p className='text-success'>
						<Icon.CaretUpFill />
						{num}%
					</p>
				) : (
					<p className='text-danger'>
						<Icon.CaretDownFill /> {num * -1}%
					</p>
				);
			},
			classname: 'text-end',
		},
		{
			label: 'Market Cap',
			key: 'marketCapUsd',
			formatter: (value) => '$' + millify(value, { precision: 2 }),
			classname: 'text-end',
		},
		{
			label: 'Volume(24h)',
			key: 'volumeUsd24Hr',
			formatter: (value) => '$' + millify(value, { precision: 2 }),
			classname: 'text-end',
		},
		{
			label: 'vwap(24h)',
			key: 'vwap24Hr',
			formatter: (value) => '$' + Number.parseFloat(value).toFixed(0),
			classname: 'text-end',
		},
		{
			label: 'Max Supply',
			key: 'maxSupply',
			formatter: (value, row) => millify(value || 0) + ' ' + row.symbol,
			classname: 'text-end',
		},
	];
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 10,
	});

	const table = useReactTable({
		data: data?.data || [],
		columns,
		getCoreRowModel: getCoreRowModel(),
		onPaginationChange: setPagination,
		state: {
			pagination,
		},
	});
	console.log(table);
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
			<table className='table table-striped'>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
				<tfoot>
					{table.getFooterGroups().map((footerGroup) => (
						<tr key={footerGroup.id}>
							{footerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.footer,
												header.getContext(),
										  )}
								</th>
							))}
						</tr>
					))}
				</tfoot>
			</table>
		</div>
	);
};

export default Crypto2;
