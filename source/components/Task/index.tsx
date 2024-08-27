import {Feather} from '@expo/vector-icons'

import {Container, TaskText, TaskDone, TaskDelete, Buttom} from './styles'
export function Task() {
    return(
        <Container>
            <Buttom>
                <Feather name='circle' size={36} color='#0A0A0A'> </Feather>
            <TaskText>Task</TaskText>
            
            <TaskDelete>
                <Feather name='trash-2' size={26} color='#0A0A0A'> </Feather>
            </TaskDelete>
            </Buttom>
        </Container>
    );
}