import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const qna = {
  'questions':[
    {
      'title': 'El Lavado Perfecto lo haces con:',
      'answers': {
        'a': 'Detergentes – Lavalozas – Quitamanchas',
        'b': 'Detergentes – Suavizantes – Quitamanchas',
        'c': 'Detergentes – Limpiadores – Quitamanchas'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    },
    {
      'title': 'Los Detergentes de Ferias no son recomendados por:',
      'answers': {
        'a': 'Tienen menor dosificación por lavado',
        'b': 'Tienen un bajo nivel de activos en su formulación',
        'c': 'Tienen muchos aditivos'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    },
    {
      'title': '¿Por qué el cambio de Bolsas versus Cajas?',
      'answers': {
        'a': 'Las Cajas no son reciclables',
        'b': 'Las Cajas tiene menor durabilidad',
        'c': 'Las Cajas cuesta más el armado'
      },
      'win': {
        1: true,
        2: false,
        3: false
      }
    },
    {
      'title': 'Las nuevas Bolsas de detergentes son:',
      'answers': {
        'a': '100% Reutilizables',
        'b': '100% Reciclables',
        'c': '100% Sustentables'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    },
    {
      'title': 'Todas las Bolsas de Detergentes tienen un logo que dice:',
      'answers': {
        'a': 'Eco Saco 100% Biodegradable',
        'b': 'Eco Bolsa 100% Reutilizables',
        'c': 'Eco Bolsa 100% Reciclables'
      },
      'win': {
        1: false,
        2: false,
        3: true
      }
    },
    {
      'title': 'El suavizante Soft cuantos beneficios tiene:',
      'answers': {
        'a': '4 beneficios',
        'b': '5 beneficios',
        'c': '6 beneficios'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    },
    {
      'title': 'OMO y Soft Piel sensible ayudan:',
      'answers': {
        'a': 'Deja tu ropa limpia y suave con un olor exquisito',
        'b': 'Dejan tu ropa suave y fácil de planchar',
        'c': 'Deja impecable y con olor increíble'
      },
      'win': {
        1: true,
        2: false,
        3: false
      }
    },
    {
      'title': 'Los detergentes de nuestras marcas están:',
      'answers': {
        'a': 'Tienen mayores niveles de activos de Limpieza',
        'b': 'Tienen bajo performance',
        'c': 'Tienen altos preservantes en la formula'
      },
      'win': {
        1: true,
        2: false,
        3: false
      }
    },
    {
      'title': 'La publicidad de OMO Quitamanchas dice:',
      'answers': {
        'a': 'Saca todo tipo de Machas',
        'b': 'Remueve las manchas difíciles',
        'c': 'Elimina las manchas de chocolate'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    },
    {
      'title': 'Soft que hace en tu ropa:',
      'answers': {
        'a': 'Mantiene Limpia y Fresca tu ropa al contacto con tu piel',
        'b': 'Mantiene las fibras lisas, para que la ropa se sienta suave y delicada al tacto, con un toque suave de fragancia',
        'c': 'Mantiene las fibras alineadas y ordenas con un rico y suave perfume'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    },
    {
      'title': 'Soft y OMO Piel Sensible es solo para:',
      'answers': {
        'a': 'Solo ropa de guagua',
        'b': 'Ropa de guagua, ropa interior y todo tipo de prendas',
        'c': 'Solo ropa de adultos'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    },
    {
      'title': 'Las nuevas Bolsas se Detergentes que beneficios poseen:',
      'answers': {
        'a': 'Son de PE, material 100% reciclable',
        'b': 'Son de Plástico, 99% reutilizable',
        'c': 'Son Ecológicas 100% Biodegradables'
      },
      'win': {
        1: true,
        2: false,
        3: false
      }
    },
    {
      'title': 'La tarea de un detergente es:',
      'answers': {
        'a': 'Eliminar la suciedad y sacar manchas',
        'b': 'No dañar y Perfumar la ropa',
        'c': 'Eliminar olores y Suciedad'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    },
    {
      'title': 'La dosificación del detergente se calcula según:',
      'answers': {
        'a': 'El grado de suciedad de la ropa y la dureza del agua',
        'b': 'Las machas y tipo de ropa a lavar',
        'c': 'El tipo de lavadora y tipo de ropa'
      },
      'win': {
        1: true,
        2: false,
        3: false
      }
    },
    {
      'title': '¿Por qué es necesario un suavizante?',
      'answers': {
        'a': 'El suavizante perfuma y suaviza la ropa',
        'b': 'Retorna la flexibilidad a la ropa, recomponiendo las fibras y además perfumándolas',
        'c': 'Hace la ropa dure más, además las deja con una agradable fragancia'
      },
      'win': {
        1: false,
        2: true,
        3: false
      }
    }
  ]
}
let current = 0;
let score = 0;
let trivia = {};
const __ = require('underscore');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      next: false,
      current: current,
      title: '',
      answers: {
        a:'',
        b:'',
        c:''
      }
    };
  }
  shuffleTrivia() {
    trivia = __.shuffle(qna.questions);
    this.next();
  }
  check(option) {
    if( trivia[current].win[option] == true ){
      score++;
    }
    this.setState({
      score: score,
      next: true
    });
  }
  next() {
    current++;
    if( current > 3){
      current = 0;
      score = 0;
      this.setState({
        next: false,
        active: false
      });
    }else{
      this.setState({
        active: true,
        current: current,
        score: score
      });
    }
    this.setState({
      title: trivia[current].title,
      next: false,
      answers: trivia[current].answers
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          opacity: this.state.active ? 0 : 1,
          height: this.state.active ? 0 : 'auto'
        }}>
          <Image
          source={require('./assets/bg.png')}/>
          <TouchableOpacity onPress={this.shuffleTrivia.bind(this)} style={{position:'absolute',top:'50%'}}>
            <Text>Empezar</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          opacity: this.state.active ? 1 : 0,
          height: this.state.active ? 'auto' : 0
        }}>
          <Image
          source={require('./assets/bg-blur.png')}/>
          <View style={{position:'absolute'}}>
            <Text>{this.state.current}</Text>
            <Text>Puntos: {this.state.score}</Text>
            <Text>{this.state.title}</Text>
            <Text>A) {this.state.answers.a}</Text>
            <Text>B) {this.state.answers.b}</Text>
            <Text>C) {this.state.answers.c}</Text>
            <View style={{
              opacity: this.state.next ? 0 : 1,
              height: this.state.next ? 0 : 'auto'
            }}>
              <TouchableOpacity onPress={()=>this.check(1)}>
                <Text>A</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.check(2)}>
                <Text>B</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.check(3)}>
                <Text>C</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              opacity: this.state.next ? 1 : 0,
              height: this.state.next ? 'auto' : 0
            }}>
              <TouchableOpacity onPress={()=>this.next()}>
                <Text>Siguiente</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      ///Render ends...
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
