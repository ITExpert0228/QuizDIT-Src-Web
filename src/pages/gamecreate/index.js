
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
import buttonBg from '../../assets/img/gameover/buttonBg.png';

// import logo from '../../assets/img/logo.png';
import styles from "./styles";

import GLOBAL from "../../global.js";
import * as Colyseus from "colyseus.js";

// var FBLoginButton = require('./FBLoginButton');

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index : 0,
      roomID : ''
    };

    var endpoint = location.protocol.replace("http", "ws") + "//" + location.hostname;

    // development server
    if (location.port && location.port !== "80") { endpoint += ":2567" }

    // endpoint = "ws://localhost:2567";
    GLOBAL.colyseus = new Colyseus.Client(endpoint);
  }
  async redirectRoute(route) {
    const { navigation }  = this.props;
    navigation.navigate(route);
  }

  create() {
    GLOBAL.room = GLOBAL.colyseus.join('create_or_join', { create: true, user:GLOBAL.player.uname });
    try {
      GLOBAL.room.onJoin.add(() => {
        console.log("room created successfully");
        GLOBAL.create = true;
        this.redirectRoute('Gamewait');
      });
    } catch (err) {
      console.log("wait", err);
    }
  }

  join() {
    if (this.state.roomID == '') {
      alert('Please input game code.');
      return;
    }
    GLOBAL.room = GLOBAL.colyseus.join(this.state.roomID, {user:GLOBAL.player.uname});
    try {
      GLOBAL.room.onJoin.add(() => {
        console.log("client joined successfully");
        GLOBAL.create = false;
        this.redirectRoute('Gamewait');
      });
    } catch (err) {
      console.log("wait", err);
    }
  }

  render() {
    return (
      <Container>
        <Content>
            <ImageBackground source={bg} style={styles.bg_container}>
                <View style={styles.header} transparent>
                  <TouchableOpacity onPress={() => this.redirectRoute('Quizes')}>
                    <Image source={backIcon} style={styles.backIcon} resizeMode="contain" />
                  </TouchableOpacity>
                  <View style={{ flex: 0.95, alignItems: 'center', }}>
                    <Text style={styles.headerText}>Art & Design</Text>
                  </View>    
                  <TouchableOpacity onPress={() => this.redirectRoute('Quizes')}>
                    <Image source={propertyIcon} style={styles.propertyIcon} resizeMode="contain" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.questionText}>Enter Game Code</Text>
                <View style={{ flex: 0.15, alignItems: 'center', marginTop: 20 }}>
                  <Input style={styles.input} value={this.state.roomID} onChangeText={(text) => this.setState({roomID:text})}/>
                </View>    
                <Button style={styles.shareButton} bordered onPress={() => this.join()}>
                  <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.shareText}>Join Game</Text>
                  </View>
                </Button>
                <Button style={styles.takeButton} transparent onPress={() => this.create()}>
                  <ImageBackground source={buttonBg} style={styles.buttonBg} resizeMode="contain" >
                    <View style={styles.takeInView}>
                      <Text style={styles.takeText}>Create Game</Text>
                    </View>
                  </ImageBackground>
                </Button>
            </ImageBackground>
        </Content>
      </Container>
    );
  }
}

export default Setting;
