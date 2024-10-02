import {Feather} from '@expo/vector-icons'
import {Container, TaskText, TaskDone, TasksInfo} from './styles'
import { TaskProps, RootStackParamList} from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from '../../context/TaskContext';

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task(props: TaskProps) {
    
    const navigation = useNavigation<Props['navigation']>();
    const {selectTask} = useContext(TaskContext);

    function handlePress() {
        navigation.navigate('Details');
        selectTask(props);
    }

    return(
        <Container>
                <TaskDone onPress={props.onCheck}>
                    <Feather name={ props.status ? 'check-circle' : 'circle'} size={38} color={props.status ? 'green' : 'red'} style={{alignItems: 'flex-end'}}> </Feather>
                </TaskDone>
                    <TaskText>{props.title}</TaskText>
                <TasksInfo onPress={() => handlePress()}>
                    <Feather name='file-minus' size={32} color='#000'> </Feather>
                </TasksInfo>
        </Container>
    );
}