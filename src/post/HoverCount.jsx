import Counter from "./Counter";
const HoverCount = (props) => {
    return (
        <div className="text-center w-100">
            <button className="btn btn-info" onMouseEnter={props.handelIncreaseCount}>Count : {props.count}</button>
        </div>
    )
}
export default Counter(HoverCount);