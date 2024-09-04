import { useDispatch } from "react-redux";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrementCount,
  incrementCount,
  resetCount,
} from "./redux/slices/countSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p>{`The count is: ${count}`}</p>
      <button
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(resetCount());
        }}
        disabled={count === 0}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatch(decrementCount());
        }}
        disabled={count === 0}
      >
        -
      </button>
    </div>
  );
}

export default App;
