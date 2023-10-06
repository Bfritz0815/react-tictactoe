import {useState} from "react";

function Square ({id}) {
  let [value, setValue] = useState(null);
  function handleClick(){
    setValue("X");
    console.log("click: ",id," value: ",value);
  }

  return <button className="square"
                 onClick={handleClick}>
    {value}
  </button>;
}

export default function Board() {
  return <>
    <div className="board-row">
      <Square id={1}></Square>
      <Square id={2}></Square>
      <Square id={3}></Square>
    </div>
    <div className="board-row">
      <Square id={4}></Square>
      <Square id={5}></Square>
      <Square id={6}></Square>
    </div>
    <div className="board-row">
      <Square id={7}></Square>
      <Square id={8}></Square>
      <Square id={9}></Square>
    </div>
  </>;
}
