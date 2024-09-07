import { useState, useEffect} from "react";
import { Alert, View } from "react-native";
import { SafeAreaView, FlatList} from "react-native";
import { InputAddTask } from '../InputAddTask';
import { TaskStatusBar } from "../TaskStatusBar";
import { Task } from "../Task";
import { Container, ListEmpty, ListEmptyText} from "./styles";

export function Main() {
    const [tasks, setTasks] = useState<{description: string, check: boolean}[]>([]);
    const [taskTask, setTaskText] = useState<string>("");
    const [taskCount, setTaskCount] = useState<number>(0);

    function handleTaskAdd() {
        if (taskTask === "") {
          return Alert.alert("The text field is empty")
        }
    
        if (tasks.some((tasks) => tasks.description == taskTask)) {
          return Alert.alert("There is already a task with the same name");
        }
    
        const newTask = {description: taskTask, check: false};
        setTasks([...tasks, newTask]);
        setTaskText("")
      }

      useEffect(() => {
        setTaskCount(tasks.length);
      }, [tasks]);

      const toggleCheck = (index: number) => {
        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            newTasks[index].check = !newTasks[index].check;
            return newTasks; 
        });
    };

      return (
            <SafeAreaView>
                <TaskStatusBar/>
                <InputAddTask onChangeText={setTaskText} value={taskTask} 
                handleTaskAdd={handleTaskAdd}/>
                <View style={{alignItems: 'center'}}>
                
                <FlatList data={tasks} keyExtractor={(item, index) => index.toString()} 
                renderItem={({item, index}) => (<Task title={item.description} 
                status={item.check} onCheck={() => toggleCheck(index)}/>)}
                ListEmptyComponent={() => {
                    return (
                        <ListEmpty>
                            <ListEmptyText>You have not yet created a task</ListEmptyText>
                        </ListEmpty>
                    );
                }}
                >
                </FlatList>

                </View>
            </SafeAreaView>
      );

}

