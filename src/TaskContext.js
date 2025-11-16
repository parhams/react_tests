import { createContext } from "react";

export const TaskContext = createContext({
    taskItems : [],
    setTaskItems : () =>{}
})