
import React, {Component} from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, Form, Item, Input, Button, Icon, Label,Right, Left, Body } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Sidebar, { redirectRoute } from '../sidebar';

import bg from '../../assets/img/dark_bg.png';
import header_item from '../../assets/img/header_item.png';
import setting_imail from '../../assets/img/setting_imail.png';
import setting_ikey from '../../assets/img/setting_ikey.png';
import setting_inoti from '../../assets/img/setting_inoti.png';
import setting_iface from '../../assets/img/setting_iface.png';
import setting_arrow from '../../assets/img/setting_arrow.png';

// import logo from '../../assets/img/logo.png';
import styles from "./styles";

// var FBLoginButton = require('./FBLoginButton');

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  async redirectRoute(route) {
    const { navigation }  = this.props;
    navigation.navigate(route);
  }

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground source={bg} style={styles.bg_container}>            
            <View style={styles.header} transparent>
              <TouchableOpacity onPress={() => this.redirectRoute('Sidebar')}>
                <Image source={header_item} style={styles.item} resizeMode="contain" />
              </TouchableOpacity>
              <View style={{ flex: 0.9, alignItems: 'center', }}>
                <Text style={styles.headerText}>Settings</Text>
              </View>
            </View>
            <View transparent >
                <Text style={styles.divText}>ACCOUNT</Text>
                <Button style={styles.buttonCard} rounded>
                  <View style={styles.viewflex}>
                    <View style={styles.fleximg}>
                      <Image source={setting_imail} style={styles.mailImg} resizeMode="contain" />
                    </View>
                    <View style={styles.flexText}>
                      <Text style={styles.cardText1}>ACCOUNT</Text>
                      <Text style={styles.cardText2}>hannafields@email.com</Text>
                    </View>
                    <View style={styles.flexArrow}>
                      <Image source={setting_arrow} style={styles.arrowIcon} resizeMode="contain" />
                    </View>
                  </View>
                </Button>
                <Button style={styles.buttonCard} rounded>
                  <View style={styles.viewflex}>
                    <View style={styles.fleximg}>
                      <Image source={setting_ikey} style={styles.mailImg} resizeMode="contain" />
                    </View>
                    <View style={styles.flexText}>
                      <Text style={styles.cardText1}>Change Password</Text>
                      <Text style={styles.cardText2}>Last changede 2 weeks ago</Text>
                    </View>
                    <View style={styles.flexArrow}>
                      <Image source={setting_arrow} style={styles.arrowIcon} resizeMode="contain" />
                    </View>
                  </View>  
                </Button>                    
            </View>
            <View transparent >
              <Text style={styles.divText}>OTHER</Text>
              <Button style={styles.buttonCard} rounded>
                <View style={styles.viewflex}>
                  <View style={styles.fleximg}>
                    <Image source={setting_inoti} style={styles.mailImg} resizeMode="contain" />
                  </View>
                  <View style={styles.flexText}>
                    <Text style={styles.cardText1}>Push Notifications</Text>
                    <Text style={styles.cardText2}>For messages.badges etc</Text>
                  </View>
                  <View style={styles.flexArrow}>
                    <Image source={setting_arrow} style={styles.arrowIcon} resizeMode="contain" />
                  </View>
                </View>  
              </Button>
              <Button style={styles.buttonCard} rounded>
                <View style={styles.viewflex}>
                  <View style={styles.fleximg}>
                    <Image source={setting_iface} style={styles.mailImg} resizeMode="contain" />
                  </View>
                  <View style={styles.flexText}>
                    <Text style={styles.cardText1}>Connect Facebook Account</Text>
                    <Text style={styles.cardText2}>Allows quick login and sharing</Text>
                  </View>
                  <View style={styles.flexArrow}>
                    <Image source={setting_arrow} style={styles.arrowIcon} resizeMode="contain" />
                  </View>
                </View>  
              </Button>  
            </View>
            <Button style={styles.facebookButton} onPress={() => this.redirectRoute('Login')} full >
              <Text style={styles.facebookButtonTtext}>Log Out</Text>
            </Button>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

export default Setting;
