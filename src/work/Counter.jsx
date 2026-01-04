import { useReducer } from "react";

const init = {
    value1: 0,
    value2: 5
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, value1: state.value1 + action.val };

        case 'decrement1':
            return { ...state, value1: state.value1 - action.val };

        case 'increment2':
            return { ...state, value2: state.value2 + action.val };

        case 'decrement2':
            return { ...state, value2: state.value2 - action.val };

        case 'reset':
            return init;

        default:
            return state;
    }
};

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, init);

    return (
        <>
            <h3 className="text text-center text-dark">{count.value1}</h3>
            <h3 className="text text-center text-dark">{count.value2}</h3>

            <div className="text text-center my-3">
                <button
                    className="btn btn-success"
                    onClick={() => dispatch({ type: 'increment1', val: 3 })}
                >
                    افزایش
                </button>
                <button
                    className="btn btn-info"
                    onClick={() => dispatch({ type: 'decrement1', val: 5 })}
                >
                    کاهش
                </button>
            </div>

            <div className="text text-center my-3">
                <button
                    className="btn btn-warning"
                    onClick={() => dispatch({ type: 'increment2', val: 4 })}
                >
                    افزایش
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'decrement2', val: 5 })}
                >
                    کاهش
                </button>
            </div>

            <div className="text text-center my-3">
                <button
                    className="btn btn-danger_shadow"
                    onClick={() => dispatch({ type: 'reset' })}
                >
                    ریست
                </button>
            </div>
        </>
    );
};

export default Counter;
