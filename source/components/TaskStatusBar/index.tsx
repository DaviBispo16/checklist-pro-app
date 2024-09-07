import {Container, Card, CardTitle, CardValue, TaskCountContainer, TaskCountText, GreentingsContainer, GreetingsText} from './styles'
import { View } from 'react-native'



export function TaskStatusBar() {
    return(
        <Container>
            <GreentingsContainer>
                <GreetingsText>Welcome back</GreetingsText>
            </GreentingsContainer>
        </Container>
    )
}