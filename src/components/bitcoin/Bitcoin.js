import { useGetAssetsQuery } from '../../features/cryptoSlice';
import Coin from './Coin';

const Bitcoin = () => {
	const { data, isFetching, isLoading, isSuccess, refetch, status, isError } =
		useGetAssetsQuery({ pollingInterval: 3000, skipPollingIfUnfocused: true });
	console.log(data);
	if (isFetching) return <div>Fetching data</div>;
	return (
		<div>
			{data?.data?.map((d) => (
				<Coin key={d.id} {...d} />
			))}
		</div>
	);
};

export default Bitcoin;
