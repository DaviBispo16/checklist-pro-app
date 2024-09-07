import {Feather} from '@expo/vector-icons'
import {Container, TaskText, TaskDone, TasksInfo, ContainerText} from './styles'
import { TaskProps, RootStackParamList} from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task({id, title, onCheck, status}: TaskProps) {
    
    const [task, setTasks] = useState<TaskProps>({id, title, onCheck, status});
    const navigation = useNavigation<Props['navigation']>();

    function handlePress() {
        navigation.navigate('Details', {id, title, status});
    }

    return(
        <Container>
                <TaskDone onPress={onCheck}>
                    <Feather name={ status ? 'check-circle' : 'circle'} size={38} color={status ? 'green' : 'red'} style={{alignItems: 'flex-end'}}> </Feather>
                </TaskDone>
                    <ContainerText>
                    <TaskText>{title}</TaskText>
                    </ContainerText>
                <TasksInfo onPress={() => handlePress()}>
                    <Feather name='file-minus' size={32} color='#000'> </Feather>
                </TasksInfo>
        </Container>
    );
}