
import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Footer, Card, Form, Item, Input, Button, Icon, Label,Right, Left, Body } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/dark_bg.png';
import backIcon from '../../assets/img/molecular/backIcon.png';
import propertyICon from '../../assets/img/molecular/propertyIcon.png';
import pic from '../../assets/img/profile/pic.png';
import rank from '../../assets/img/profile/rank.png';
import acheive1 from '../../assets/img/profile/acheive1.png';
import acheive2 from '../../assets/img/profile/acheive2.png';
import acheive3 from '../../assets/img/profile/acheive3.png';
import acheive4 from '../../assets/img/profile/acheive4.png';
import acheive5 from '../../assets/img/profile/acheive5.png';
import acheive6 from '../../assets/img/profile/acheive6.png';
import acheive7 from '../../assets/img/profile/acheive7.png';
import acheive8 from '../../assets/img/profile/acheive8.png';
import acheive9 from '../../assets/img/profile/acheive9.png';

import GLOBAL from "../../global.js";

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
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Image source={backIcon} style={styles.backIcon} resizeMode="contain" />
                </TouchableOpacity>
                <View style={{ flex: 0.95, alignItems: 'center', }}>
                </View>
                <TouchableOpacity onPress={() => this.redirectRoute('Gameover')}>
                  <View style={{flex: 0.95,}}></View>
                  <Image source={propertyICon} style={styles.property} resizeMode="contain" />
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => this.redirectRoute('Gameover')}>
                  <Image source={propertyICon} style={styles.propertyICon} resizeMode="contain" />
                </TouchableOpacity> */}
              </View>
              {/* <View style={styles.picDiv}> */}
              <View style={styles.picDiv}>
                <Image source={require('../../assets/img/leaderboard/'+GLOBAL.player.avatar)} style={styles.pic} resizeMode="contain" />
                <Image source={rank} style={styles.rank} resizeMode="contain" />
                <Text style={styles.fieldName}>Hanna Fields</Text>
                <Text style={styles.fieldMail}>@hanna_fields</Text>
              </View>
              {/* <View style={styles.acheiveBox}> */}
                <View style={styles.cardflex}>
                  <Image source={acheive1} style={styles.acheive} resizeMode="contain" />
                  <Image source={acheive2} style={styles.acheive} resizeMode="contain" />
                  <Image source={acheive3} style={styles.acheive} resizeMode="contain" />
                </View>
                <View style={styles.cardflex}>
                  <Image source={acheive4} style={styles.acheive} resizeMode="contain" />
                  <Image source={acheive5} style={styles.acheive} resizeMode="contain" />
                  <Image source={acheive6} style={styles.acheive} resizeMode="contain" />
                </View>
                <View style={styles.cardflex}>
                  <Image source={acheive7} style={styles.acheive} resizeMode="contain" />
                  <Image source={acheive8} style={styles.acheive} resizeMode="contain" />
                  <Image source={acheive9} style={styles.acheive} resizeMode="contain" />
                </View>
              {/* </View> */}

            </ImageBackground>
        </Content>
      </Container>
    );
  }
}

export default Setting;
