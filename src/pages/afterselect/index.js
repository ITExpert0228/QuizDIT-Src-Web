
import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, Card, Form, Item, Input, Button, Icon, Label,Right, Left, Body, CardItem, Title } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/dark_bg.png';

// import logo from '../../assets/img/logo.png';
import styles from "./styles";

import GLOBAL from "../../global.js";
// import * as Colyseus from "colyseus.js";
// var FBLoginButton = require('./FBLoginButton');

class Setting extends Component {
    constructor(props) {
      super(props);
      this.state={
        index: 0,
      };

      try {
        GLOBAL.room.onMessage.addOnce(this.msgListener.bind(this));
        GLOBAL.room.send({ action:'select', select: GLOBAL.last });
        console.log("request - select");
      } catch (err) {
        console.log("wait", err);
      }
  
    }

    msgListener(message) {
      console.log('msmmm', message);
      if (message.key == 'ready') {
        console.log('response - ready');
        setTimeout(() => {
          const step = message.data;
          console.log('step', step);
          if (step >= 5) {
            this.redirectRoute('Gameresult')
          } else {
            if (GLOBAL.create) {
              GLOBAL.room.send({ action:'test', test: GLOBAL.step+1 });
              console.log('request - next test');
            }
            this.redirectRoute('Molecular')
          }
        }, 3000);
      }
    }
    
    redirectRoute(route) {
      const { navigation }  = this.props;
      GLOBAL.room.onMessage.remove(this.msgListener.bind(this));
      navigation.navigate(route);
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
                <Text style={styles.topText}>Submitted Your Select.</Text>
                <View style="">
                  <Text style={styles.questionText}>Please wait for other players to respond...</Text>
                </View>
            </ImageBackground>
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
    
// });

export default Setting;
