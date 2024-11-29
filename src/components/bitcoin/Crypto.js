import { useGetAssetsQuery } from '../../features/cryptoSlice';
import Table from '../table/Table';
import * as Icon from 'react-bootstrap-icons';
import millify from 'millify';

const Crypto = () => {
	const { data, isFetching } = useGetAssetsQuery({
		pollingInterval: 3000,
		skipPollingIfUnfocused: true,
	});
	console.log(data);
	const header = [
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
						{num}
					</p>
				) : (
					<p className='text-danger'>
						<Icon.CaretDownFill /> {num * -1}
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
			formatter: (value) => Number.parseFloat(value || 0).toFixed(0),
			classname: 'text-end',
		},
	];
	if (isFetching) return <div>Fetching data</div>;
	return (
		<div>
			<Table classname={'table-striped'} header={header} data={data.data} />
		</div>
	);
};

export default Crypto;
