import styled from 'styled-components/native';

export const InputContainer = styled.View`
    padding-top: 15px;
    padding: 15px 7px 0px 7px;
    width: 100%;
    border-radius: 18px;
    flex-direction: row;
    gap: 5px
`;

export const InputText = styled.TextInput`
    background-color: #FAFAF9;
    flex: 1;
    padding: 12px;
    border-radius: 18px;
    border-width: 1px;
`;

export const InputButtom = styled.TouchableOpacity`
    align-items: center;
    border-radius: 16px;
`;