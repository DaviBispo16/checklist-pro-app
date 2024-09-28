import { createContext, ReactNode, useEffect, useState } from "react";
import { TaskProps } from "../utils/types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

interface TaskContextProps {
    task: TaskProps;
    tasks: TaskProps[];
    setTasks: ([] : TaskProps[]) => void;
    selectTask: (task: TaskProps) => void;
    clearTask: () => void;
    addTask: (title: string) => void;
    removeTask: (taskId: number) => void;
}

interface TaskProviderPros {
    children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
    task: {id: 0, title: '', status: false}, 
    tasks: [],
    setTasks: () => {},
    selectTask: () => {}, 
    clearTask: () => {}, 
    addTask: () => {},
    removeTask: () => {}
    }
)

function TaskProvider({children}: TaskProviderPros) {
    const [task, setTask] = useState<TaskProps>({id: 0, title: '', status: false});
    const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);

    const password = Constants.expoConfig?.extra?.KEY_TASK;

    function selectTask(task:TaskProps) {
        setTask(task);
    }

    function clearTask() {
        setTask({id: 0, title: '', status: false});
    }
 
    const addTask = (title: string) => {
        const newTask = {
            id: tasks.length+1,
            title: title,
            status: false
        }
        setTasks([...tasks, newTask]);
      };

    const removeTask = async (taskId: number) => {
        const updateTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updateTasks);
        await storeData(updateTasks);
    }

    async function storeData(tasks:TaskProps[]) {
        try {
            await AsyncStorage.setItem(password, JSON.stringify(tasks));
        } catch (error) {
            console.log(error);
        }
    }

    async function getData() {
        try {
            const valueTask = await AsyncStorage.getItem(password);
            if (valueTask) {
                const parsedTask = JSON.parse(valueTask);
                setTasks(parsedTask);
            }
        } catch (error) {
            console.log(error);
        }
       }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        storeData(tasks);
    }, [tasks])


    return (
        <TaskContext.Provider value={{task, tasks ,selectTask, clearTask, addTask, removeTask ,setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;