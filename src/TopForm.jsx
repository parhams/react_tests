import { useContext, useState } from "react";
import { Fragment } from "react/jsx-runtime"
import { TaskContext } from "./TaskContext";

const TopForm = ()=> {
    const [task, setTask] = useState("")
    const {taskItems, setTaskItems} = useContext(TaskContext)
    
    const handelsetTask = (event)=> {
        setTask(event.target.value)
    }

    const handelAddTask = (event)=> {
        event.preventDefault();
        
        // بررسی که task خالی نباشد
        if (!task.trim()) return;
        
        // استفاده از آرایه موجود یا آرایه خالی
        const currentItems = Array.isArray(taskItems) ? taskItems : [];
        setTaskItems([...currentItems, {
            id: Math.random(), 
            title: task, 
            done: false
        }])
        
        setTask(""); // پاک کردن فیلد بعد از ثبت
    }

    return (
        <Fragment>
            <h4 className="text-center text-info text_shadow">
                به پروژه من خوش آمدید
            </h4>
            <form onSubmit={handelAddTask}>
                <div className="form-group d-flex">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={task} 
                        onChange={handelsetTask}
                        placeholder="وظیفه جدید را وارد کنید..."
                    />
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </Fragment>
    )
}

export default TopForm;
