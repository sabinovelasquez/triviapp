import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Font } from 'expo';

import qna from './assets/trivia.json';
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
      optionA: false,
      optionB: false,
      optionC: false,
      end: false,
      endText: '',
      title: '',
      answers: {
        a:'',
        b:'',
        c:''
      }
    };
  }
  componentDidMount() {
    Font.loadAsync({
      'myriadpro-regular': require('./assets/fonts/MyriadPro-Regular.ttf'),
    });
  }
  shuffleTrivia() {
    trivia = __.shuffle(qna.questions);
    this.next();
  }
  begin() {
    current = 0;
    this.setState({
      active: false,
      next: false,
      current: current,
      optionA: false,
      optionB: false,
      optionC: false,
      end: false,
      endText: '',
      title: '',
      answers: {
        a:'',
        b:'',
        c:''
      }
    });
  }
  check(option) {
    if( trivia[current].win[option] == true && this.state.next == false ){
      score++;
    }
    this.setState({optionA:false, optionB:false, optionC:false});
    __.each(trivia[current].win, (val, key)=>{
      if(parseInt(key) === 1 && val === true){ this.setState({optionA:true}); }
      if(parseInt(key) === 2 && val === true){ this.setState({optionB:true}); }
      if(parseInt(key) === 3 && val === true){ this.setState({optionC:true}); }
    });
    this.setState({
      score: score,
      next: true
    });
  }
  next() {
    if( current == 3){
      if(score >= 3){
        this.setState({
          endText: '¡Felicitaciones has ganado el desafío del nuevo Dove Serum!'
        });
      }else{
        this.setState({
          endText: '¡Sigue participando!'
        });
      }
      current = 0;
      score = 0;
      this.setState({
        end: true
      });
    }else{
      current++;
      this.setState({
        end: false,
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
          <View style={
            {
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Image
              style={{position:'absolute', top:80}}
              source={require('./assets/logo.png')}/>
            <TouchableOpacity onPress={this.shuffleTrivia.bind(this)} style={{position:'absolute', top:440, zIndex:99}}>
              <Image
                source={require('./assets/begin.png')}/>
            </TouchableOpacity>
            <Text style={
              {
                position: 'absolute',
                top: 260,
                zIndex: 80,
                textAlign: 'center',
                backgroundColor: 'transparent',
                fontSize: 33,
                color: '#00477F',
                padding: 40,
              }
            }>
              Responde correctamente las siguientes 3 preguntas y ¡Gana con el Nuevo 
              <Text style={{fontWeight: 'bold'}}> Dove Serum!</Text>
            </Text>
            <Image
              style={{position:'absolute', bottom:80, right:80}}
              source={require('./assets/dove_bottle.png')}/>
          </View>
          
        </View>
        <View style={{
          opacity: this.state.active ? 1 : 0,
          height: this.state.active ? 'auto' : 0
        }}>
          <Image
          source={require('./assets/bg.png')}/>
          <View style={
            {
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Image
              style={{position:'absolute', top:80}}
              source={require('./assets/logo.png')}/>
            <View style={{
              width: '80%',
              opacity: this.state.end ? 1 : 0,
              height: this.state.end ? 'auto' : 0
            }}>
              <Text style={
                {
                  // fontFamily: 'myriadpro-regular',
                  fontSize: 34,
                  marginBottom: 8,
                  textAlign: 'center',
                  color: '#00477F',
                  backgroundColor: 'transparent'}
                }>
                {this.state.endText}
              </Text>
            </View>
            <View style={{
              width: '80%',
              opacity: this.state.end ? 0 : 1,
              height: this.state.end ? 0 : 'auto'
            }}>
              <Text style={
                {
                  // fontFamily: 'myriadpro-regular',
                  fontSize: 30,
                  marginBottom: 8,
                  color: '#00477F',
                  backgroundColor: 'transparent'}
                }>
                {this.state.title}
              </Text>
              <Text style={
                {
                  // fontFamily: 'myriadpro-regular',
                  fontSize: 26,
                  color: '#00477F',
                  backgroundColor: 'transparent'}
                }>A) {this.state.answers.a}</Text>
              <Text style={
                {
                  fontSize: 26,
                  color: '#00477F',
                  backgroundColor: 'transparent'}
                }>B) {this.state.answers.b}</Text>
              <Text style={
                {
                  // fontFamily: 'myriadpro-regular',
                  fontSize: 26,
                  color: '#00477F',
                  backgroundColor: 'transparent'}
                }>C) {this.state.answers.c}</Text>
            </View>
            <Text style={
              {
                position: 'absolute',
                bottom: 250,
                fontSize: 26,
                color: '#00477F',
                opacity: this.state.end ? 0 : 1,
                height: this.state.end ? 0 : 'auto',
                backgroundColor: 'transparent'}
              }>{this.state.current} de 3</Text>
            <View style={{
              position: 'absolute',
              bottom: 120,
              width: '100%',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: this.state.active && !this.state.end ? 1 : 0,
              height: this.state.active && !this.state.end ? 'auto' : 0
            }}>
              <TouchableOpacity style={styles.options} onPress={()=>this.check(1)}>
                {this.state.next && this.state.optionA===true ? <Image source={require('./assets/good.png')} style={styles.result}/> : null}
                {this.state.next && this.state.optionA===false ? <Image source={require('./assets/bad.png')} style={styles.result}/> : null}
                <Image source={require('./assets/a.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options} onPress={()=>this.check(2)}>
                {this.state.next && this.state.optionB===true ? <Image source={require('./assets/good.png')} style={styles.result}/> : null}
                {this.state.next && this.state.optionB===false ? <Image source={require('./assets/bad.png')} style={styles.result}/> : null}
                <Image source={require('./assets/b.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options} onPress={()=>this.check(3)}>
                {this.state.next && this.state.optionC===true ? <Image source={require('./assets/good.png')} style={styles.result}/> : null}
                {this.state.next && this.state.optionC===false ? <Image source={require('./assets/bad.png')} style={styles.result}/> : null}
                <Image source={require('./assets/c.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{
              opacity: this.state.next ? 1 : 0,
              height: this.state.next ? 'auto' : 0,
              position: 'absolute',
              bottom:40
            }}>
              <TouchableOpacity onPress={()=>this.next()}>
                <Image source={require('./assets/next.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{
              opacity: this.state.end ? 1 : 0,
              height: this.state.end ? 'auto' : 0,
              position: 'absolute',
              zIndex:99,
              bottom:260
            }}>
              <TouchableOpacity onPress={()=>this.begin()}>
                <Image source={require('./assets/startover.png')}/>
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
  result: {
    position: 'absolute',
    zIndex: 99,
    top: 5,
    right: -20
  },
  options: {
    height: 100,
    marginLeft: 30,
    marginRight: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
