
import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, Card, Form, Item, Input, Button, Icon, Label,Right, Left, Body, CardItem, Title } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/dark_bg.png';
import header_item from '../../assets/img/molecular/backIcon.png';
import img1 from '../../assets/img/leaderboard/userPic1.png';
import img2 from '../../assets/img/leaderboard/userPic2.png';
import img3 from '../../assets/img/leaderboard/userPic3.png';

// import logo from '../../assets/img/logo.png';
import styles from "./styles";

import GLOBAL from "../../global.js";
// var FBLoginButton = require('./FBLoginButton');

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state={
            index: 0,
            keyCode: GLOBAL.room.id,
            users: []
        };

        GLOBAL.step = 0;

        try {
          GLOBAL.room.onMessage.add((message) => {
            if (message.key == 'join') {
              console.log("response join", message.data);
              this.setState({users:message.data});
            } else if (message.key == 'next') {
              console.log("response - next");
              this.redirectRoute('Molecular');
            }
          });
        } catch (err) {
          console.log("wait", err);
        }
  
    }
    redirectRoute(route) {
        const { navigation }  = this.props;
        navigation.navigate(route);
        };

    start() {
      GLOBAL.room.send({ action:'next'});
      console.log("request - next");
      // if (GLOBAL.create)
      GLOBAL.room.removeAllListeners();
      this.redirectRoute('Molecular');
    }
    cardRow () {
      return this.state.users.map((object, i) => {
        return <CardItem style={styles.CardItem} button key={i}>
                  <View style={styles.divideL}>
                      <Image source={require('../../assets/img/leaderboard/'+object.avatar)} style={styles.cardImg} resizeMode="contain" />                           
                  </View>
                  <View style={styles.divideR}>
                      <Text style={styles.name}>{object.fname}</Text>
                  </View>
              </CardItem>;
      });
    }
  render() {
    return (
      <Container>        
        <Content>
            <ImageBackground source={bg} style={styles.bg_container}>
                <View style={styles.header} transparent>
                    <TouchableOpacity onPress={()=>this.redirectRoute('Gamecreate')}>
                        <Image source={header_item} style={styles.item} resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={{ flex: 0.9, alignItems: 'center', }}>
                        <Text style={styles.headerText}>Art & Design</Text>
                    </View>
                </View>
                <Text style={styles.topText}>Joined User List</Text>
                <View style="">
                  <Text style={styles.keyText}>KEY - {this.state.keyCode}</Text>
                </View>
                <Card style={styles.card} transparent>
                    {this.cardRow()}
                </Card> 
                {GLOBAL.create? (
                  <Button style={styles.button} hasText transparent  onPress={()=>this.start()}>
                      <Text style={styles.buttonText}>Start Game</Text>
                  </Button>
                ):null} 
                
            </ImageBackground>
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
    
// });

export default Setting;
