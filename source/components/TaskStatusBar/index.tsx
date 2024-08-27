import {Container, Card, CardTitle, CardValue, TaskCountContainer, TaskCountText} from './styles'
import { View } from 'react-native'

export function TaskStatusBar({taskCount}) {
    return(
        <View>
            <Container>
                <Card>
                    <CardTitle>Tasks</CardTitle>
                    <CardValue>4</CardValue>
                </Card>
                <Card>
                    <CardTitle>Tasks</CardTitle>
                    <CardValue>4</CardValue>
                </Card>
                <Card>
                    <CardTitle>Tasks</CardTitle>
                    <CardValue>4</CardValue>
                </Card>
            </Container>
            <TaskCountContainer>
                <TaskCountText>Tasks = {taskCount}</TaskCountText>
            </TaskCountContainer>
        </View>
    )
}