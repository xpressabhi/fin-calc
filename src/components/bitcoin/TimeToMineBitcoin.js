import React from 'react';
import TableFilter from '../table/TableFilter';

const CURRENT_BLOCK = 874832;
const getReward = (height) => {};
const BLOCK_HEIGHT_PER_HALVENING = 210000;
const START_REWARD = 50;

export default function TimeToMineBitcoin() {
	const header = [
		{ label: 'Count', key: 'count' },
		{ label: 'Year', key: 'year' },
		{ label: 'Block Height', key: 'blockheight' },
		{ label: 'Reward', key: 'reward' },
		{ label: 'Bitcoins', key: 'bitcoins' },
		{ label: 'Total Bitcoins', key: 'totalcoins' },
	];
	const data = () => {
		const result = [];
		let reward = START_REWARD;
		let year = 2012;
		let totalcoins = 0;
		for (let i = 0; i < 33; i++) {
			totalcoins += reward * BLOCK_HEIGHT_PER_HALVENING;
			result.push({
				count: i + 1,
				year,
				blockheight: BLOCK_HEIGHT_PER_HALVENING * (i + 1),
				reward,
				bitcoins: reward * BLOCK_HEIGHT_PER_HALVENING,
				totalcoins,
			});
			reward = reward / 2;
			year += 4;
		}
		return result;
	};
	return (
		<div>
			TimeToMineBitcoin
			<TableFilter classname={'table-striped'} header={header} data={data()} />
		</div>
	);
}
