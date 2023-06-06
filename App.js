import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {

  const [counter , setCounter] = React.useState(0);

  function doit() {
    let sum = Number(counter) + 1;
    setCounter(sum)
    {/*alert (sum); */}
  }

  return (
    <View style={styles.container}>
      <Text style={style.elso}>Számláló !</Text>

      <TextInput style={style.input}/>

      <Button title= "számol" 
      onPress= {doit}/>

      <View>
        <Text style={style.elso}>
          {counter}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elso: {
    color: '#fff',
    fontSize: 30 ,
  },
  input: {
    backgroundColor: 'lightblue', 
    width: '90%',
    fontSize: 30 , 
  }
});
