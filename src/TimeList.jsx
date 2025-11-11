import { useContext } from "react";
import Item from "./Item"
import { TestContext } from "./testContext";

const TimeList = () => {
    const context = useContext(TestContext);   
    return (
        <div className="item-container">
            {
               context.timeArr.map((c, index) => (
                    <Item key={index}>{c}</Item>
                ))
            } 
        </div>
    )
}

export default TimeList; 