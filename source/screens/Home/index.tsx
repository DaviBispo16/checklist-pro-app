import { useState, useEffect, useContext} from "react";
import { View, Alert, Text} from "react-native";
import { SafeAreaView, FlatList} from "react-native";
import { InputAddTask } from "../../components/InputAddTask";
import { TaskStatusBar } from "../../components/TaskStatusBar";
import { Task } from "../../components/Task";
import { Container, ListEmpty, ListEmptyText } from "./styles";
import { TaskContext } from "../../context/TaskContext";
import { TaskProps } from "../../utils/types";
import { Formik } from "formik";
import * as Yup from 'yup'

export default function Home() {
    const {tasks, setTasks, addTask} = useContext(TaskContext);
    const [taskCount, setTaskCount] = useState<number>(0);

    const TaskSchema = Yup.object().shape({
      taskText: Yup.string()
      .min(3, "The minimum is 3 characters")
      .max(12, "The maximum is 10 caracters")
      .required("You need to report a task")
    })

    function handleTaskAdd(TaskText:string) {
      if (tasks.some((task) => task.title.trim() === TaskText)) {
        return Alert.alert("There is already a task with the same name");
      }  

      addTask(TaskText);
      }

      useEffect(() => {
        setTaskCount(tasks.length);
      }, [tasks]);

      function handleTaskChangeStatus (taskToChange:TaskProps) {
        const updateTasks = tasks.map(task => task.id === taskToChange.id 
          ? {...task, status: !task.status}
          : task);
        setTasks(updateTasks);
      }

      return (
            <SafeAreaView>
              <Container>
                <TaskStatusBar/>
                <Formik
                  initialValues={{taskText: ""}}
                  validationSchema={TaskSchema}
                  onSubmit={(values, {resetForm}) => {
                    const trimmedText = values.taskText.trim();
                    if (trimmedText) {
                      handleTaskAdd(trimmedText);
                      resetForm({values: {taskText: ''}});
                    }
                  }}
                >
                   {({handleSubmit, handleChange, handleBlur, values, errors, touched}) => {
              
              const handleSubmitWrapper = () => {
                const trimmedText = values.taskText.trim();
                if (trimmedText) {
                handleSubmit();
                }
              };
              
                  
              return (
                <View>
                    <InputAddTask 
                    onChangeText={handleChange('taskText')} 
                    handleTaskAdd={handleSubmitWrapper}
                    onBlur={handleBlur('taskText')}
                    value={values.taskText} 
                    />

                    {touched.taskText && errors.taskText && (
                      <Text>{errors.taskText}</Text>
                    )}
                  </View>
                  )}}
                
                </Formik>
                
                
                <View style={{alignItems: 'center'}}>
                <FlatList
                  data={tasks}
                  renderItem={({item, index}) => <Task id={item.id} title={item.title} 
                  status={item.status} onCheck={() => handleTaskChangeStatus(item)}/>}
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
            </Container>
            </SafeAreaView>
      );
}

