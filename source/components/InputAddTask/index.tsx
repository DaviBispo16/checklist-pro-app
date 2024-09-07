import {Feather} from '@expo/vector-icons'
import {InputContainer, InputText, InputButtom} from './styles'
import { View } from 'react-native'

type Props = {
    onChangeText: (text:string) => void,
    value: string,
    handleTaskAdd: () => void;
}

export function InputAddTask({onChangeText, value, handleTaskAdd}: Props) {
    return(
        <InputContainer>
            <InputText placeholder='Search' placeholderTextColor='black' keyboardType='default' 
            onChangeText={onChangeText} value={value}/>
            <InputButtom onPress={handleTaskAdd}>
                <Feather name='plus-circle' size={60} color='#77B9F2'></Feather>
            </InputButtom>
        </InputContainer>
    )
}