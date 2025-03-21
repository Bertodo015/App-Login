import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import "./global.css";
import Botao from './src/components/Botao';

export default function App() {
  return (
    <>
    <View style={styles.container}>
        <Text style={styles.title}>Seja bem-vindo ao Aplicativo!</Text>
        <Text style={styles.paragraph}>
          Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
        </Text>
      
        <Text style={styles.paragraph}>
          Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
        </Text>

        <TextInput 
          style={styles.input}
          placeholder='Login'
          inputMode='numeric'
          maxLength={50}
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry={true}
        />

        <View>
          <Botao icone='account-arrow-right' texto='Logar' cor='#253237' />
          <Botao icone='account-plus' texto='Cadastrar' cor='#F07167' />
        </View>

        <Text className='text-4x1 mt-[200px]'> Olá mundo! </Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBDEF0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: 700,
    color: '#9dfg5s',

  },

  paragraph: {
    fontSize: 18,
    marginTop: 16,
    textAlign: 'justify',
  },

  input: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 9,
    marginTop: 16,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5C6B73',
  },
  
});
