
import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, Card, Form, Item, Input, Button, Icon, Label,Right, Left, Body, CardItem, Title } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/dark_bg.png';
import header_item from '../../assets/img/header_item.png';
import img1 from '../../assets/img/notifications/img1.png';
import img2 from '../../assets/img/notifications/img2.png';
import img3 from '../../assets/img/notifications/img3.png';

// import logo from '../../assets/img/logo.png';
import styles from "./styles";

// var FBLoginButton = require('./FBLoginButton');

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state={
            index: 0,
        };
    }
    redirectRoute(route) {
        const { navigation }  = this.props;
        navigation.navigate(route);
        };
  render() {
    return (
      <Container>        
        <Content>
            <ImageBackground source={bg} style={styles.bg_container}>
                <View style={styles.header} transparent>
                    <TouchableOpacity onPress={()=>this.redirectRoute('Sidebar')}>
                        <Image source={header_item} style={styles.item} resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={{ flex: 0.9, alignItems: 'center', }}>
                        <Text style={styles.headerText}>Notifications</Text>
                    </View>
                </View>
                <Text style={styles.topText}>1 Unread</Text>
                <Card style={styles.card} transparent>
                    <CardItem style={this.state.index === 1? styles.selectCardItem : styles.CardItem} button onPress={() => this.setState({index: 1}) }>
                        <View style={styles.divideL}>
                            <Image source={img1} style={styles.cardImg} resizeMode="contain" />                           
                        </View>
                        <View style={styles.divideR}>
                            <Text style={styles.name}>Caleb Jonhns sent you a message</Text>
                            <Text style={styles.timeago}>2 Mins Ago</Text>
                        </View>
                    </CardItem>
                    <CardItem style={this.state.index === 2? styles.selectCardItem : styles.CardItem} button onPress={() => this.setState({index: 2}) }>
                        <View style={styles.divideL}>
                            <Image source={img2} style={styles.cardImg} resizeMode="contain" />                           
                        </View>
                        <View style={styles.divideR}>
                            <Text style={styles.name}>New Quiz available for Drama</Text>
                            <Text style={styles.timeago}>48 Mins Ago</Text>
                        </View>
                    </CardItem>
                    <CardItem style={this.state.index === 3? styles.selectCardItem : styles.CardItem} button onPress={() => this.setState({index: 3}) }>
                        <View style={styles.divideL}>
                            <Image source={img3} style={styles.cardImg} resizeMode="contain" />                           
                        </View>
                        <View style={styles.divideR}>
                            <Text style={styles.name}>You unlocked a new Badge</Text>
                            <Text style={styles.timeago}>Yesterday</Text>
                        </View>
                    </CardItem>
                </Card>  
                <Button style={styles.button} hasText transparent>
                    <Text style={styles.buttonText}>Clear All</Text>
                </Button>
            </ImageBackground>
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
    
// });

export default Setting;
