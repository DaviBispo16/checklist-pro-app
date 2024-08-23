import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FAFAF9;
    overflow: hidden;
`;

export const TaskText = styled.Text`
    color: #0A0A0A;
    font-size: 16px;
    font-weight: 500;
    padding-right: 10px;
`;

export const TaskDone = styled.TouchableOpacity`
    width: 76px;
    height: 56px;
    background-color: #FAFAF9;
    justify-content: center;
    align-items: center;
`;

export const TaskDelete = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: #F22929;
    justify-content: center;
    align-items: center;
    padding-left: 7px;

`