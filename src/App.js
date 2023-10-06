import {useState} from "react";

function Square ({value, onSquareClick}) {


  return <button className="square"
                 onClick={onSquareClick}>
    {value}
  </button>;
}

export default function Board() {

  let [squares, setSquares] = useState(Array(9).fill(null));

  function handleSquareClick(id){
    const nextSquares = squares.slice();
    nextSquares[id] = "X";
    setSquares(nextSquares);
  }

  return <>
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
