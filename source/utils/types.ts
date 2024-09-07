export type TaskProps = {
    id: number;
    title: string;
    status: boolean;
    onCheck?: () => void;
};

export type RootStackParamList = {
    Home: undefined;
    Details: TaskProps;
}