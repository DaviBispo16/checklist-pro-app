import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top: 10px;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Buttom = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    background-color: #FAFAF9;
    overflow: hidden;
`;

export const TaskText = styled.Text`
    color: #0A0A0A;
    font-size: 16px;
    font-weight: 500;
    padding-right: 10px;
    text-align: center;
`;

export const TaskDone = styled.TouchableOpacity`
    
`;

export const TaskDelete = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
`
