import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #77B9F2;
    width: 100%;
    height: 60px;
    padding: 12px;
    margin-top: 15px;
    margin-right: 10px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
`

export const TaskText = styled.Text`
    color: #0A0A0A;
    font-size: 16px;
    font-weight: 500;
    padding-right: 10px;
    justify-content: center;
`;

export const TaskDone = styled.TouchableOpacity`
    
`;

export const TasksInfo = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
`
