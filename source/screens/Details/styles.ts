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
export const ContainerModal = styled.View`
    background-color: #a1a1aa;
    width: 100%;
    height: 200px;
    position: absolute;
    top: 40%;
    left: 0%;
    border-radius: 13px;
`

export const ContainerText = styled.Text`
    margin: 10px;
    text-align: left;
    justify-content: start;
    font-size: 22px;
    font-weight: 900;
`

export const ContainerTextFlag = styled.Text`
    font-size: 23px;
    font-weight: 700;
    text-align: center;
    padding-top: 10px;
`

export const ContainerButtoms = styled.View`
    margin: 20px;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ButtonCancel = styled.TouchableOpacity`
    background-color: #22d3ee;
    border-radius: 10px;
    width: 90px;
`

export const ButtonDeletion = styled.TouchableOpacity`
    background-color: #b91c1c;
    border-radius: 10px;
    width: 90px;
`

export const TextCancel = styled.Text`
    font-size: 22px;
    font-weight: 700;
    text-align: center;
`

export const TextDeletion = styled.Text`
    font-size: 22px;
    font-weight: 700;
    text-align: center;
`