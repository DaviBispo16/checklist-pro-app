import { FlatList, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Main } from './source/components/Main';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
     <View style={styles.container}>
        <Main/>
        <StatusBar style='dark'/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
});
