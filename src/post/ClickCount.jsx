import Counter from "./Counter";

const ClickCount = (props) => {
    return (
        <div className="text-center w-100">
            <button className="btn btn-success" onClick={props.handelIncreaseCount}>Count : {props.count}</button>
        </div>
    )
}
export default Counter(ClickCount, 3);