
import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Footer, Card, Form, Item, Input, Button, Icon, Label,Right, Left, Body } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/dark_bg.png';
import backIcon from '../../assets/img/molecular/backIcon.png';
import propertyIcon from '../../assets/img/molecular/propertyIcon.png';
import flagIcon from '../../assets/img/molecular/flagIcon.png';
import heartIcon from '../../assets/img/molecular/heartIcon.png';
import timer from '../../assets/img/molecular/timer.png';

// import logo from '../../assets/img/logo.png';
import styles from "./styles";

import GLOBAL from "../../global.js";
// var FBLoginButton = require('./FBLoginButton');

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index : 0,
      step: 0,
      question: '',
      answers: [''],
      timer: 10
    };

    try {
      if (GLOBAL.step == 0 && GLOBAL.create) {
        GLOBAL.room.send({ action:'test', test: GLOBAL.step + 1 });
        console.log("request - test create");
      }
      GLOBAL.room.onMessage.add((message) => {
        if (message.key == 'test') {
          console.log("response - test");
          GLOBAL.step = message.data.step;
          this.setState({step:message.data.step, question: message.data.q, answers: message.data.a, timer:10});
          this.interval = setInterval(() => this.setState((prevState)=>{
            if (prevState.timer == 0) {
              this.afterSelect(1000);
              return 10;
            }
            return {timer: prevState.timer - 1}
          }), 1000);
        }
      });
    } catch (err) {
      console.log("wait", err);
    }
  }
  componentDidMount() {
    var currentRoute = this.props.navigation.state.routeName;
    this.props.navigation.addListener('didFocus', (event) =>{
      if (currentRoute === event.state.routeName) {
        // console.log('did appear');
        
      }
    })
  }

  updateView(step, q, a) {
    this.setState({step:step, question: q, answers: a});
  }

  redirectRoute(route) {
    clearInterval(this.interval);
    const { navigation }  = this.props;
    navigation.navigate(route);
  }

  afterSelect(index) {
    GLOBAL.last = index;
    this.redirectRoute('Afterselect');
  }

  answerRow() {
    return this.state.answers.map((answer, i) => {
      return <Button bordered style={styles.button} onPress={()=>this.afterSelect(i)} key={i}>
                <Text style={styles.buttonText}>{answer}</Text>
            </Button>;
    });
  }

  render() {
    return (
      <Container>
        <Content>
            <ImageBackground source={bg} style={styles.bg_container}>
                <View style={styles.header} transparent>
                  <View style={{ flex: 1, alignItems: 'center', }}>
                    <Text style={styles.headerText}>Art & Design</Text>
                  </View>    
                </View>
                <Text style={styles.topText}>Question {this.state.step}/5</Text>
                <Text style={styles.questionText}>{this.state.question}</Text>
                {this.answerRow()}
                <View style={styles.footer}>
                    <Image source={flagIcon} style={styles.flagIcon} resizeMode="contain" />
                  <View style={{flex: 0.9}}></View>
                    <Image source={heartIcon} style={styles.heartIcon} resizeMode="contain" />
                </View>
                <View style={styles.timerView}>
                  <Image source={require('../../assets/img/molecular/'+this.state.timer+'.png')} style={styles.timer} resizeMode="contain" />
                </View>
            </ImageBackground>
        </Content>
      </Container>
    );
  }
}

export default Setting;
