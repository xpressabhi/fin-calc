import { SimpleInterest } from './components/simpleInterest';
import { CompoundInterest } from './components/compoundInterest';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import Tictactoe from './components/tictac/Tictactoe';

export const paths = [
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
];
