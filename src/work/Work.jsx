import { Fragment } from "react/jsx-runtime";
import useCounter from "../hooks/Counter";
// import Counter from "./Counter";
// import Parent from "./Parent";

const Work = () => {
    const [count, increment, decrement, reset] = useCounter(1, 5);
    return (
        <div className="text-center mt-3">
        <h4 className="text text-center text-dark">مدیریت کارها</h4>
        <h3 className="text text-center text-info">{count}</h3>
        <button className="btn btn-success" onClick={increment}>افزایش</button>
        <button className="btn btn-danger" onClick={decrement}>کاهش</button>
        <button className="btn btn-secondary" onClick={reset}>بازنشانی</button>
        
        {/* <Counter />
        <Parent /> */}
        </div>
    )
}

export default Work;