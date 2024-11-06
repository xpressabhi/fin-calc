import React, { useState } from 'react';

export const SimpleInterest = () => {
	const [principal, setPrincipal] = useState(100000);
	const [years, setYears] = useState(5);
	const [rate, setRate] = useState(9);

	const interest = Math.floor((+principal * +years * +rate) / 100);
	const total = interest + +principal;
	return (
		<div className='card'>
			<div className='card-header'>
				<h2>Simple Interest</h2>
			</div>
			<div className='card-body'>
				<form>
					<div className='mb-3'>
						<label for='principal' className='form-label'>
							Principal Amount (10000 to 1000000) : {principal}
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
						<label for='years' className='form-label'>
							Years (1 to 40): {years}
						</label>
						<input
							type='range'
							className='form-range'
							id='years'
							min='1'
							max='40'
							step='1'
							value={years}
							onChange={(e) => setYears(e.target.value)}
						/>
					</div>
					<div className='mb-3'>
						<label for='rate' className='form-label'>
							Rate of interest (1 to 100): {rate}
						</label>
						<input
							type='range'
							className='form-range'
							id='rate'
							min='1'
							max='100'
							step='0.5'
							value={rate}
							onChange={(e) => setRate(e.target.value)}
						/>
					</div>
					<p>Interest Value: {interest} </p>
					<p>Final Value: {total}</p>
				</form>
			</div>
			<div className='card-footer'>footer</div>
		</div>
	);
};
