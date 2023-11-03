import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Seja bem vindo ao Universo Bourbon!</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() =>navigation.navigate('About', {name: 'Jane'})}
      >
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height:50,
    width:'80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0859c6',
    padding: 10,
  },
  text:{
    color: '#fff'
  }
});
