import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { StyleSheet, Text, View, } from 'react-native';
import { Header } from './components/Header';
import { BackIcone } from './components/BackIcone';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    
  
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackIcone></BackIcone>
      <Text style={styles.heading}>My Frist Project</Text>
      <Header></Header>
    </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
    
   
  },
  heading: {
    color: 'orange',
    fontSize: 30,

  },
 

});
