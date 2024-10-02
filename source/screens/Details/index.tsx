import { Container,ContainerHeader, ContainerContent, TitleDetails, SubtitleDetails, ButtonDelete, TextButtonDelete, BlockTitleAndSubtitle, ContainerTitle, ContainerDelete, ButtonBack, ContainerModal, ContainerText, ContainerTextFlag, ContainerButtoms, ButtonCancel, TextCancel, ButtonDeletion, TextDeletion } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {Feather} from '@expo/vector-icons'

import { RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Modal } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList>;


export default function Details(){

    const {task, tasks ,removeTask} = useContext(TaskContext);
    const [visible, setVisible] = useState<boolean>(false);

    const navigation = useNavigation<Props['navigation']>();

    function activeModal() {
        setVisible(true);
    }

    function desactiveModal() {
        setVisible(false);
    }

    async function handleDeleteTask() {
        if (task.id) {
            await removeTask(task.id);
            desactiveModal();
            navigation.popToTop();
        }
    }

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
                    <SubtitleDetails>{task.title}</SubtitleDetails>
                </BlockTitleAndSubtitle>
                
                <BlockTitleAndSubtitle>
                    <TitleDetails>Status</TitleDetails>
                    <SubtitleDetails>
                        <Feather name={task.status ? 'check-circle' : 'x-circle'} size={27} color={task.status ? 'green' : 'red'}/>
                    </SubtitleDetails>
                </BlockTitleAndSubtitle>
            </ContainerContent>
        
        <ContainerDelete>
                <ButtonDelete onPress={activeModal}>
                < TextButtonDelete>Delete</TextButtonDelete>
                </ButtonDelete>
        </ContainerDelete>

        <Modal animationType="slide" transparent={true} visible={visible}>
            <ContainerModal>
                <ContainerText>Delete Task</ContainerText>
                <ContainerTextFlag>Do your really want to delete?</ContainerTextFlag>
                <ContainerButtoms>
                    <ButtonCancel onPress={desactiveModal}>
                        <TextCancel>Cancel</TextCancel>
                    </ButtonCancel>
                    <ButtonDeletion onPress={handleDeleteTask}>
                        <TextDeletion>Delete</TextDeletion>
                    </ButtonDeletion>
                </ContainerButtoms>
            </ContainerModal>
        </Modal>
        
        </SafeAreaView>        
    </Container>

    )
}