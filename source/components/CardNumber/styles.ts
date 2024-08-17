import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 9px;
    flex-direction: column;
    align-items: center;
    background-color: '#77B9F2';
    border-radius: 4px;
    overflow: hidden;
    gap: 8px,
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
