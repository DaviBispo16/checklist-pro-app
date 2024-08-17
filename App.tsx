import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Task} from './source/components/Task' 
import { CardNumber } from './source/components/CardNumber';
import { InputAddTask } from './source/components/InputAddTask';

export default function App() {
  return (
    <View style={styles.container}>
      <InputAddTask/>
      <View style={{flexDirection: 'row', gap: 16}}>
      <CardNumber/>
      <CardNumber/>
      <CardNumber/>
      </View>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
