import React, { useState } from 'react';
import { LineChart } from './lineChart';

const finalValue = (principal, time, rate) =>
	Math.floor(+principal * Math.pow(1 + rate / 100, time));

const INR = new Intl.NumberFormat('en-IN', {
	style: 'currency',
	currency: 'INR',
});

export const CompoundInterest = () => {
	const [principal, setPrincipal] = useState(100000);
	const [time, setTime] = useState(5);
	const [rate, setRate] = useState(9);

	const total = Math.floor(+principal * Math.pow(1 + rate / 100, time));
	const interest = total - +principal;
	const labels = new Array(40).fill(0).map((_, i) => i + 1);
	console.log(labels);
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: labels.map((i) => finalValue(principal, i, rate)),
			},
			{
				label: 'My Second dataset',
				backgroundColor: 'rgb(155, 0, 132)',
				borderColor: 'rgb(155, 0, 132)',
				data: labels.map((i) => finalValue(principal, i, +rate + 2)),
			},
		],
	};

	return (
		<div className='card my-3'>
			<div className='card-header'>
				<h2>Compound Interest</h2>
			</div>
			<div className='card-body'>
				<form>
					<div className='mb-3'>
						<label for='principal' className='form-label'>
							Principal Amount (10000 to 1000000) : {INR.format(principal)}
						</label>
						<input
							type='range'
							className='form-range'
							id='principal'
							min='10000'
							max='1000000'
							step='1000'
							value={principal}
							onChange={(e) => setPrincipal(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label for='time' className='form-label'>
							Years (1 to 40): {time}
						</label>
						<input
							type='range'
							className='form-range'
							id='time'
							min='1'
							max='40'
							step='1'
							value={time}
							onChange={(e) => setTime(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label for='rate' className='form-label'>
							Rate of interest (5 to 40): {rate}
						</label>
						<input
							type='range'
							className='form-range'
							id='rate'
							min='5'
							max='40'
							step='0.5'
							value={rate}
							onChange={(e) => setRate(e.target.value)}
						/>
					</div>
					<p>Interest Value: {INR.format(interest)} </p>
					<p>Final Value: {INR.format(total)}</p>
				</form>
			</div>
			<div className='card-footer'>
				<LineChart data={data} />
			</div>
		</div>
	);
};
