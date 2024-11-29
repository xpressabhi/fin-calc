import React from 'react';

const Coin = ({ name, priceUsd, rank, symbol, marketCapUsd }) => {
	return (
		<div>
			{name}, {priceUsd}, {rank}, {symbol}, {marketCapUsd}
		</div>
	);
};

export default Coin;
