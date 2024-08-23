import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Task} from './source/components/Task' 
import { CardNumber } from './source/components/CardNumber';
import { InputAddTask } from './source/components/InputAddTask';
import { useState } from 'react';

export default function App() {

  const [tasks, setTasks] = useState<{description: string, check: boolean}[]>([]);
  const [taskTask, setTaskText] = useState("");



  return (
     <View style={styles.container}>
     <SafeAreaView style={{flex: 1}}>
     <InputAddTask/>
      <View style={{flexDirection: 'row', gap: 18, alignItems: 'center', justifyContent: 'center'}}>
      <CardNumber/>
      <CardNumber/>
      <CardNumber/>
      </View>

      <View style={{marginTop: 10}}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </View>
   
  
      {/* <FlatList data={tasks} keyExtractor={(item, index) => index.toString()}
        renderItem={
        ({item}) => (
          <Task/>
        )
      }
      ListEmptyComponent={() => (
        <View>
          <Text>No tasks</Text>
        </View>
      )}
        
        /> */}
        </SafeAreaView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,

  },
});
