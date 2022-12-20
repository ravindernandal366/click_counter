import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Count is ${count}";
    console.log("hii");
  });

  const [count, setCount] = useState(0);

  let increase_count = () => {
    let new_count = Number(count) + 1;
    setCount(new_count);
  };

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={increase_count}> Click </button>
    </div>
  );
}
