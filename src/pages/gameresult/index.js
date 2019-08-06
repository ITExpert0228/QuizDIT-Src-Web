
import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, Card, Form, Item, Input, Button, Icon, Label,Right, Left, Body, CardItem, Title } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/dark_bg.png';
import header_item from '../../assets/img/molecular/backIcon.png';

import styles from "./styles";
import GLOBAL from "../../global.js";

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state={
            index: 0,
            users: []
        };

        try {
          GLOBAL.room.send({action:'result'});
          GLOBAL.room.onMessage.addOnce((message) => {
            if (message.key == 'result') {
              console.log("success", message.data);
              this.setState({users:message.data});
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

    cardRow () {
      const handler = this;
      return this.state.users.map((object, i) => {
        return <CardItem style={styles.CardItem} button key={i}>
                  <View style={styles.divideL}>
                      <Image source={require('../../assets/img/leaderboard/'+object.avatar)} style={styles.cardImg} resizeMode="contain" />                           
                  </View>
                  <View style={styles.divideR}>
                      <Text style={styles.name}>{object.fname}</Text>
                      <Text style={styles.timeago}>{object.tscore}</Text>
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
                <Text style={styles.topText}>Game Result</Text>
                <Card style={styles.card} transparent>
                    {this.cardRow()}
                </Card> 
                {true? (
                  <Button style={styles.button} hasText transparent  onPress={()=>this.redirectRoute('Leaderboard')}>
                      <Text style={styles.buttonText}>My Score</Text>
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
