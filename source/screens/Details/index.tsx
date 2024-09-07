import { Container,ContainerHeader, ContainerContent, TitleDetails, SubtitleDetails, ButtonDelete, TextButtonDelete, BlockTitleAndSubtitle, ContainerTitle, ContainerDelete, ButtonBack } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {Feather} from '@expo/vector-icons'

import { RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList>;


export default function Details({route}: any){

    const {id, title, status} = route.params;

    const navigation = useNavigation<Props['navigation']>();


    return (
        <Container>
            <SafeAreaView>
            <ContainerHeader>
                <ButtonBack onPress={() => navigation.popToTop()}>
                    <Feather name="chevrons-left" size={24}/>
                    <SubtitleDetails>Back</SubtitleDetails>
                </ButtonBack>
                <ContainerTitle>Details</ContainerTitle>
            </ContainerHeader>

            <ContainerContent>
                <BlockTitleAndSubtitle>
                    <TitleDetails>Task</TitleDetails>
                    <SubtitleDetails>{title}</SubtitleDetails>
                </BlockTitleAndSubtitle>
                
                <BlockTitleAndSubtitle>
                    <TitleDetails>Created in</TitleDetails>
                    <SubtitleDetails>text</SubtitleDetails>
                </BlockTitleAndSubtitle>

                <BlockTitleAndSubtitle>
                    <TitleDetails>Status</TitleDetails>
                    <SubtitleDetails>
                        <Feather name={status ? 'check-circle' : 'x-circle'} size={27} color={status ? 'green' : 'red'}/>
                    </SubtitleDetails>
                </BlockTitleAndSubtitle>

                <BlockTitleAndSubtitle>
                    <TitleDetails>Notes</TitleDetails>
                    <SubtitleDetails>text</SubtitleDetails>
                </BlockTitleAndSubtitle>
            </ContainerContent>
        
        <ContainerDelete>
                <ButtonDelete>
                <   TextButtonDelete>Delete</TextButtonDelete>
                </ButtonDelete>
        </ContainerDelete>
        
        </SafeAreaView>        
    </Container>

    )
}