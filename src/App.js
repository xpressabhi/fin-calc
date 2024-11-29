import React, { useEffect } from 'react';
import { Nav } from './components/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import Footer from './components/Footer';
import { paths } from './router/constants';

function App() {
	useEffect(() => {
		const darkMode = window.matchMedia('(prefers-color-scheme: dark )').matches;
		document.documentElement.setAttribute(
			'data-bs-theme',
			darkMode ? 'dark' : 'light',
		);
	}, []);
	return (
		<div className='container-fluid'>
			<header className='App-header'>
				<Nav />
			</header>
			<main className='container'>
				<Router>
					<div>
						<Routes>
							<Route path='/posts/:id' element={<PostDetails />} />
							{paths.map(({ path, Component }) => (
								<Route key={path} path={path} element={<Component />} />
							))}
						</Routes>
					</div>
				</Router>
			</main>
			<Footer />
		</div>
	);
}

export default App;
