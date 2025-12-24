import { useState } from "react";

const Counter = MainComponent =>{
    const [count, setCount] = useState(0);
    const handelIncreaseCount = ()=> {
        setCount(count+1)
    }
    const newComponent= ()=> {
        return (
            <MainComponent count={count} handelIncreaseCount={handelIncreaseCount}/>
        )

    }
    return newComponent
}

export default Counter;