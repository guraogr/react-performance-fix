import { useCounter } from "./hooks/useCounter";
import ChildComponent from "./components/ChildComponent";
import "./App.css";

function App() {
  const { count, onClickIncrement, onClickIncrementDouble } = useCounter();

  return (
    <>
      <button type="button" onClick={onClickIncrement}>
        +1
      </button>
      <ChildComponent onClick={onClickIncrementDouble} />
      <div>現在のカウント：{count}</div>
    </>
  );
}

export default App;
