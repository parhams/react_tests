import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItems = () => {
    const { taskItems, setTaskItems } = useContext(TaskContext);

    const handelTaskDone = (id) => {
        const index = taskItems.findIndex(t => t.id ==id)
        let newtaskItems = [...taskItems]
        newtaskItems[index].done = !newtaskItems[index].done;
        setTaskItems(newtaskItems);

    }
    const handelDeleteItem = (id) => {
        let newTaskItems = taskItems.filter(t => t.id != id)
        setTaskItems(newTaskItems)
    }

    if (taskItems.length) {
        return (

            <ul className="list-group m-0 p-0 mt-2">
                {
                    taskItems.map(t => (
                        <li className={`list-group-item d-flex justify-content-between ${t.done ? " list-group-item-success" : ""}`}>
                            {t.titel}
                            <span>
                                <i className={`me-3 pointer transition_200 text-hover-shadow fas ${t.done ? "fa-check text-success" : "fa-times text-warning"}`} onClick={() => handelTaskDone(t.id)}></i>
                                <i className="me-3 pointer transition_200 text-hover-shadow fas fa-trash text-danger" onClick={() => handelDeleteItem(t.id)}></i>
                            </span>
                        </li>
                    ))
                }
            </ul>
        )
    } else {
        return <h3 className="text-center text-danger m-4">هیچ کاری ثبت نشده است!</h3>
    }

}
export default TaskItems;