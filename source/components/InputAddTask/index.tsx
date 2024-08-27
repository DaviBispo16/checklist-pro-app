import {Feather} from '@expo/vector-icons'
import {InputContainer, InputText, InputButtom} from './styles'

export function InputAddTask({onChangeText, value, handleTaskAdd}) {
    return(
        <InputContainer>
            <InputText placeholder='Search' placeholderTextColor='black' keyboardType='default' 
            onChangeText={onChangeText} value={value}/>
            <InputButtom onPress={handleTaskAdd}>
                <Feather name='plus-square' size={50} color='#77B9F2'></Feather>
            </InputButtom>
        </InputContainer>
    )
}