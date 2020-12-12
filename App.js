import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TextInput} from 'react-native'

export default class App extends Component {
  state = {
    peso: 67,
    altura: 1.73,
    imc: 0,
    legenda: 'Normal',
    cor: '#bdc3c7'
  };
  
  calcularImc= () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5){
      this.setState({
        legenda: 'Magreza',
        cor: '#e74c3c'
      })
    }else if(resultado >= 18.5 && resultado <= 24){
      this.setState({
        legenda: 'Normal',
        cor: '#2ecc71'
      })
    }else if(resultado >= 25 && resultado < 30){
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      })
    }else if(resultado >= 30 && resultado < 40){
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      })
    }else if(resultado >= 40){
      this.setState({
        legenda: 'Obesidade Grave',
        cor: '#e74c3c'
      })
    }
  }

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View style={[styles.painel ,{backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput onChangeText={valor => {
            this.setState({
              peso: valor.replace(',','.')
            })
          }}
           placeholder="Peso" style={styles.inputs}/>
          <TextInput onChangeText={valor => {
            this.setState({
              altura: valor.replace(',','.')
            })
          }} placeholder="Altura" style={styles.inputs}/>

          <View style={styles.botao}>
            <Button color="#2ecc71" onPress={this.calcularImc} title="Calcular"/>
          </View>
        </View>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 30,
    backgroundColor: '#95a5a6'
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  resultado: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  diagnostico:{
    textAlign: 'center',
    fontSize: 20,
  },
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    borderColor: '#2c3e50'
  },
  painel: {
    backgroundColor: '#bdc3c7',
    borderRadius: 5,
    marginVertical: 10,
    padding: 8,
    width: 150,
    alignSelf: 'center'
  },
  botao: {
    width: 150,
    alignSelf: 'center',
  }
});
