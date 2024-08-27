import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    padding-top: 6px;
    gap: 18px;
    align-items: center;
    justify-content: center;
`

export const Card = styled.View`
    background-color: #77B9F2;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    overflow: hidden;
    margin-top: 10px;;
`;

export const CardTitle = styled.Text`
    color: #0A0A0A;
    font-size: 16px;
    font-weight: 500;
`;

export const CardValue = styled.Text`
    color: #0A0A0A;
    font-size: 24px;
    font-weight: 600;
`;

export const TaskCountContainer = styled.View`
    margin: 10px;
    margin-top: 30px;
`

export const TaskCountText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`
