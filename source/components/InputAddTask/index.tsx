import {Feather} from '@expo/vector-icons'
import {InputContainer, InputText, InputButtom} from './styles'

type Props = {
    onChangeText: (text:string) => void,
    handleTaskAdd: () => void;
    onBlur: (e: any) => void;
    value: string,
}

export function InputAddTask({onChangeText, onBlur ,handleTaskAdd, value}: Props) {
    return(
        <InputContainer>
            <InputText placeholder='Search' 
            placeholderTextColor='black' 
            keyboardType='default' 
            onChangeText={onChangeText} 
            onBlur={onBlur}
            value={value}
            />
            <InputButtom onPress={handleTaskAdd}>
                <Feather name='plus-circle' size={60} color='#77B9F2'></Feather>
            </InputButtom>
        </InputContainer>
    )
}