import {useState} from "react";

function Square ({value, onSquareClick}) {


  return <button className="square"
                 onClick={onSquareClick}>
    {value}
  </button>;
}

export default function Board() {

  let [squares, setSquares] = useState(Array(9).fill(null));
  let [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleSquareClick(id){
    if (squares[id] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();

    nextSquares[id] = xIsNext? "X": "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={()=>handleSquareClick(0)}></Square>
      <Square value={squares[1]} onSquareClick={()=>handleSquareClick(1)}></Square>
      <Square value={squares[2]} onSquareClick={()=>handleSquareClick(2)}></Square>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={()=>handleSquareClick(3)}></Square>
      <Square value={squares[4]} onSquareClick={()=>handleSquareClick(4)}></Square>
      <Square value={squares[5]} onSquareClick={()=>handleSquareClick(5)}></Square>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={()=>handleSquareClick(6)}></Square>
      <Square value={squares[7]} onSquareClick={()=>handleSquareClick(7)}></Square>
      <Square value={squares[8]} onSquareClick={()=>handleSquareClick(8)}></Square>
    </div>
  </>;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
