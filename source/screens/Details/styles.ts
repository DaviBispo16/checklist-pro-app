import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #F1F1F1;
    gap: 16px;
    padding: 10px;
`

export const ContainerHeader = styled.View`
    padding-bottom: 20px;
    align-content: center;
`

export const ContainerContent = styled.View`
    gap: 20px
`

export const BlockTitleAndSubtitle = styled.View`
    gap: 5px
`

export const ContainerTitle = styled.Text`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
`

export const TitleDetails = styled.Text`
    font-size: 18px;
    font-weight: 800;
`

export const SubtitleDetails = styled.Text`
    font-size: 16px;
    font-weight: 360;
`

export const ContainerDelete = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const ButtonDelete = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    background-color: #b91c1c;
    justify-content: center;
    border-radius: 5px;
`

export const ButtonBack = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`

export const TextButtonDelete = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`