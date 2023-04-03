import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const createDigits=()=>{
    const digits=[];

    for(let i=0; i<=9; i++){
      digits.push(
        <button name={i.toString()} onClick={handleClick}>{i}</button>
        )
    }
    return digits;
  }

  const handleClick=(e)=>{
    setResult(result.concat(e.target.name));
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString())
    } catch(e){
      setResult("Error")
    }
  }
  const clear=()=>{
    setResult("")
  }
  const backspace=()=>{
    setResult(result.slice(0,result.length-1))
  }

  return (
    <>
      {/* <h1>Calculator</h1> */}
      <div className="calculator">
        <form>
          <input type="text" value={result}/>
        </form>

        <div className="keypad">
          <button onClick={clear} id="clear">Clear</button>
          <button onClick={backspace}>DEL</button>
          <button name="%" onClick={handleClick}>%</button>
          <button name="/" onClick={handleClick}>/</button>
          <button name="*" onClick={handleClick}>*</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
          <button name="+" onClick={handleClick}>+</button>
          {createDigits()}
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
