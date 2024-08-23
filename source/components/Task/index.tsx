import {Feather} from '@expo/vector-icons'

import {Container, TaskText, TaskDone, TaskDelete} from './styles'
export function Task() {
    return(
        <Container>
            <TaskDone>
                <Feather name='circle' size={30} color='#0A0A0A'> </Feather>
            </TaskDone>
            <TaskText>Nada</TaskText>
            <TaskDelete>
                <Feather name='trash-2' size={26} color='#0A0A0A'> </Feather>
            </TaskDelete>
        </Container>
    );
}