import logo from './logo.svg';
// import './App.css';
import { Nav } from './components/nav';
import { SimpleInterest } from './components/simpleInterest';
import { CompoundInterest } from './components/compoundInterest';

function App() {
	return (
		<div className='container-fluid'>
			<header className='App-header'>
				<Nav />
			</header>
			<main>
				<CompoundInterest />
				<SimpleInterest />
			</main>
			<footer>Footer</footer>
		</div>
	);
}

export default App;
