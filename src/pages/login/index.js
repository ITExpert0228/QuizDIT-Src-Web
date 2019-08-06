
import React, {Component} from 'react';
import { View, TouchableOpacity, Alert, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Icon, Label,Right } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/sign_bg.png';
import logo from '../../assets/img/logo.png';
import fbIcon from '../../assets/img/login/fbIcon.png'
import styles from "./styles";

import GLOBAL from "../../global.js";
import * as Colyseus from "colyseus.js";

// var FBLoginButton = require('./FBLoginButton');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogin: "",
      userPass : ""
    };
  }

  async redirectRoute(route) {
    const { navigation }  = this.props;
    navigation.navigate(route);
  }

  login () {
    if (this.state.userLogin == '' || this.state.userPass == '') {
      alert('Please fill login information');
      return;
    } 
    //var client = new Colyseus.Client('ws://localhost:2657');
    var endpoint = location.protocol.replace("http", "ws") + "//" + location.hostname;

    // development server
    if (location.port && location.port !== "80") { endpoint += ":2567" }

    this.colyseus = new Colyseus.Client(endpoint);
    this.room = this.colyseus.join('chat', { uname: this.state.userLogin , pwd: this.state.userPass });
    try {
      this.room.onJoin.add(() => {
        console.log("client joined successfully");
      });

      this.room.onMessage.add((message) => {
        if (message.success == 1 && message.pass == this.state.userPass) {
          GLOBAL.player = message;
          this.state.userPass = '';
          this.redirectRoute('Quizes');
        } else {
          // alert('Incorrect Login Auth.');
        }
      });
    } catch (err) {
      console.log("test", err);
    }
    
    // this.chatRoom.on('update', this.onUpdateRemote.bind(this))
  }
  // onUpdateRemote (newState, patches) {
  //   console.log("new state: ", newState, "patches:", patches)
  //   this.setState(newState, this.autoScroll.bind(this))
  // }

  // autoScroll () {
  //   var domMessages = findDOMNode(this.refs.messages)
  //   domMessages.scrollTop = domMessages.scrollHeight
  // }

  // onInputChange (e) {
  //   e.preventDefault()

  //   this.setState({ currentText: e.target.value })
  // }

  // onSubmit (e) {
  //   e.preventDefault()
  //   this.chatRoom.send(this.state.currentText)
  //   this.setState({currentText: ""})
  // }


  render() {
    return (
      <Container>
        <Content>
          <ImageBackground source={bg} style={styles.bg_container}>

          <Image
              source={logo}
              style={styles.logo}
              resizeMode="contain"
            />

          <Form style={styles.form}>
            <Item stackedLabel style={styles.item}>
              <Label style={styles.usernameLabel}>Username</Label>
              <Input style={styles.input} placeholder='Enter your Username or email address' value={this.state.userLogin} onChangeText={(text) => this.setState({userLogin:text})}/>
            </Item>

            <Item stackedLabel style={styles.item}>
              <Label style={styles.passwordLabel}>Password</Label>
              <Input placeholder='Enter your password' secureTextEntry={true} value={this.state.userPass} onChangeText={(text) => this.setState({userPass:text})}/>
            </Item>

            <Button style={styles.forgotButton} hasText transparent >
              <Text style={styles.forgot}>Forgot Password?</Text>
            </Button>

            <Button style={styles.continueButton} onPress={() => this.login()} rounded bordered >
              <Text style={styles.continueButton_text}>Continue</Text>
            </Button>
          </Form>

          </ImageBackground>

          <Button  full style={styles.facebookButton} info>
            <Image source={fbIcon} style={styles.fbIcon}></Image>
            <Text style={styles.facebookButtonTtext}>Login with Facebook</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
