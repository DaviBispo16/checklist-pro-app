import {Feather} from '@expo/vector-icons'

import {Container, TaskText, TaskDone, TasksInfo, ContainerText} from './styles'

type Props = {
    title: string,
    status: boolean,
    onCheck?: () => void;
}

export function Task({title, onCheck, status}: Props) {
    return(
        <Container>
                <TaskDone onPress={onCheck}>
                    <Feather name={ status ? 'check-circle' : 'circle'} size={38} color='#0A0A0A' style={{alignItems: 'flex-end'}}> </Feather>
                </TaskDone>
                    <ContainerText>
                    <TaskText>{title}</TaskText>
                    </ContainerText>
                <TasksInfo>
                    <Feather name='file-minus' size={32} color='#0A0A0A'> </Feather>
                </TasksInfo>
        </Container>
    );
}