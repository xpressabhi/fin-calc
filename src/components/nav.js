import { paths } from '../constants';
export const Nav = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
					Fin-Calc
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='/'>
								Home
							</a>
						</li>
						{paths.map(({ path, label }) => (
							<li className='nav-item' key={path}>
								<a className='nav-link' href={path}>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
