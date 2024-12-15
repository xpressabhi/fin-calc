import { useGetExchangesQuery } from '../../features/cryptoSlice';
import TableFilter from '../table/TableFilter';
import millify from 'millify';

const Exchanges = () => {
	const { data, isFetching } = useGetExchangesQuery(0, {
		pollingInterval: 5000,
		skipPollingIfUnfocused: true,
	});
	const header = [
		{ label: '#', key: 'rank' },
		{
			label: 'Name',
			key: 'name',
			formatter: (value) => (
				<>
					<span className='text-truncate'>
						{value.length > 10 ? value.substr(0, 20) + '...' : value}
					</span>
				</>
			),
		},
		{
			label: 'Volume Total %',
			key: 'percentTotalVolume',
			formatter: (value) => Number.parseFloat(value || 0).toFixed(2) + '%',
			classname: 'text-end',
		},
		{
			label: 'Volume(24h)',
			key: 'volumeUsd',
			formatter: (value) => '$' + millify(value || 0, { precision: 2 }),
			classname: 'text-end',
		},
		{
			label: 'Time Stamp',
			key: 'updated',
			formatter: (value) =>
				new Date(Number.parseFloat(value)).toLocaleTimeString(),
			classname: 'text-end',
		},
	];
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
			<TableFilter
				classname={'table-striped'}
				header={header}
				data={data?.data}
				pagination
				pageSize={25}
			/>
		</div>
	);
};

export default Exchanges;
