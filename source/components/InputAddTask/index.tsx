import {Feather} from '@expo/vector-icons'
import {InputContainer, InputText, InputButtom} from './styles'

export function InputAddTask() {
    return(
        <InputContainer>
            <InputText placeholder='Search' placeholderTextColor='black' keyboardType='default'>
            </InputText>
            <InputButtom>
                <Feather name='plus-square' size={24} color='#77B9F2'></Feather>
            </InputButtom>
        </InputContainer>
    )
}