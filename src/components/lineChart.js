// ./components/LineChart.js
import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
export const LineChart = ({ data }) => {
	if (!data) return <h2>No data found.</h2>;
	return (
		<div>
			<Line data={data} />
		</div>
	);
};
