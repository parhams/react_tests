import Counter from "./Counter";

const PreviousReact = (props) => {
    return (
        <div className="text-center w-100">
            <button className="btn btn-warning" onClick={props.handelIncreasePreCount}>Count : {props.count}</button>
        </div>
    )
}
export default Counter(PreviousReact, 3);