import React, { useState } from 'react';
import Cell from './Cell';

const checkHorizontal = (board, turn) => {
	let flag = false;
	for (let i = 0; i < board.length; i++) {
		flag = false;
		for (let j = 0; j < board[i].length; j++) {
			if (turn === board[i][j]) {
				flag = true;
			} else {
				flag = false;
				break;
			}
		}
		if (flag) return true;
	}
	return false;
};

const checkVertical = (board, turn) => {
	let flag = false;
	for (let j = 0; j < board[0].length; j++) {
		flag = false;
		for (let i = 0; i < board.length; i++) {
			if (turn === board[i][j]) {
				flag = true;
			} else {
				flag = false;
				break;
			}
		}
		if (flag) return true;
	}
	return false;
};

const checkDiagonal = (board, turn) => {
	let flag = false;
	const size = board.length;
	for (let i = 0; i < size; i++) {
		if (turn === board[i][i]) {
			flag = true;
		} else {
			return false;
		}
	}

	for (let i = size - 1; i >= 0; i--) {
		if (turn === board[i][size - i - 1]) {
			flag = true;
		} else {
			return false;
		}
	}
	return flag;
};

const isWinner = (board, turn) => {
	return (
		checkHorizontal(board, turn) ||
		checkVertical(board, turn) ||
		checkDiagonal(board, turn)
	);
};

const Tictactoe = ({ size = 3 }) => {
	const [state, setState] = useState('');
	const [count, setCount] = useState(0);
	const [board, setBoard] = useState(
		new Array(size).fill(null).map(() => new Array(size).fill(' ')),
	);
	const [turn, setTurn] = useState('X');
	const setData = (i, j) => {
		if (board[i][j] === ' ') {
			const newBoard = [...board];
			newBoard[i][j] = turn;
			setCount((c) => c + 1);
			setBoard(newBoard);
			if (isWinner(newBoard, turn)) {
				alert('winner', turn);
			} else {
				if (count >= 8) {
					alert('draw');
				} else {
					setTurn((t) => (t === 'X' ? 'O' : 'X'));
				}
			}
		}
	};

	return (
		<div className='card'>
			<div className='card-header'>Game Tic Tac Toe - Turn: {turn} </div>
			<div className='card-body'>
				<div style={{ width: '320px' }}>
					<div className='d-flex flex-wrap'>
						{board.map((row, i) =>
							row.map((col, j) => (
								<Cell key={i} data={col} row={i} col={j} setData={setData} />
							)),
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tictactoe;
