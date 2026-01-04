import { useState } from "react";

const Counter = (MainComponent, number) => {

    const NewComponent = (props) => {
        const [count, setCount] = useState(0);

        const handelIncreaseCount = () => {
            setCount(prev => prev + number);
        };
        const handelIncreasePreCount = (num) => {
           for(let index = 0; index< num;index++) {
            setCount(
                (prevCount) => {
                    return prevCount + num
                }
            );
           }
        };

        return (
            <MainComponent
                {...props}
                count={count}
                handelIncreaseCount={handelIncreaseCount} handelIncreasePreCount={() => handelIncreasePreCount(5)}
            />
        );
    };

    return NewComponent;
};

export default Counter;
