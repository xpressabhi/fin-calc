import { SimpleInterest } from '../components/simpleInterest';
import { CompoundInterest } from '../components/compoundInterest';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import Tictactoe from '../components/tictac/Tictactoe';
import Crypto from '../components/bitcoin/Crypto';
import Crypto2 from '../components/bitcoin/Crypto2';
import Crypto3 from '../components/bitcoin/Crypto3';
import Exchanges from '../components/bitcoin/Exchanges';
import TimeToMineBitcoin from '../components/bitcoin/TimeToMineBitcoin';

export const paths = [
	{
		path: '/timetomine',
		label: 'Time to Mine Bitcoin',
		Component: TimeToMineBitcoin,
	},
	{ path: '/posts', label: 'Posts', Component: PostList },
	{ path: '/create', label: 'New Post', Component: CreatePost },
	{
		path: '/simpleinterest',
		label: 'Simple Interest',
		Component: SimpleInterest,
	},
	{
		path: '/compoundinterest',
		label: 'Compound Interest',
		Component: CompoundInterest,
	},
	{
		path: '/tictactoe',
		label: 'Tic Tac Toe',
		Component: Tictactoe,
	},
	{
		path: '/crypto',
		label: 'All Coins',
		Component: Crypto,
	},
	{
		path: '/crypto2',
		label: 'All Coins(tansack)',
		Component: Crypto2,
		hide: true,
	},
	{
		path: '/crypto3',
		label: 'All Coins(Ag Grid)',
		Component: Crypto3,
		hide: true,
	},
	{
		path: '/exchanges',
		label: 'Exchanges',
		Component: Exchanges,
	},
];
