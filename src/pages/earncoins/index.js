
import React, {Component} from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Form, Item, Input, Button, Icon, Label,Right, Left, Body } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/dark_bg.png';
import header_item from '../../assets/img/header_item.png';
import earn_watch from '../../assets/img/earncoins/earn_watch.png';
import earn_invite from '../../assets/img/earncoins/earn_invite.png';
import earn_confb from '../../assets/img/earncoins/earn_confb.png';
import earn_rateus from '../../assets/img/earncoins/earn_rateus.png';
import earn_likeus from '../../assets/img/earncoins/earn_likeus.png';
import earn_buycoins from '../../assets/img/earncoins/earn_buycoins.png';


// import logo from '../../assets/img/logo.png';
import styles from "./styles";

// var FBLoginButton = require('./FBLoginButton');

class Setting extends Component {
  constructor(props) {
    super(props);
  }
  redirectRoute(route) {
    const { navigation }  = this.props;
    navigation.navigate(route);
    };  
  render() {
    return (
        <Container>
            <Content >
                <ImageBackground source={bg} style={styles.bg_container}>
                <View style={styles.header} transparent>
                    {/* <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}> */}
                    <TouchableOpacity onPress={()=>this.redirectRoute('Sidebar')}>
                        <Image source={header_item} style={styles.item} resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={{flex: 0.9, alignItems: 'center',}}>
                        <Text style={styles.headerText}>Earn Coins</Text>
                    </View>                 
                </View>
                    <Text style={styles.topText}>You have 2,589 Coins</Text>
                    <View style={styles.flexRow}>
                        <View style={styles.cardleft}>
                            <Card style={styles.Card}>
                                <CardItem style={{backgroundColor: '#4f5360',borderRadius: 15,borderWidth: 0,}}>
                                    <Body style={{alignItems: 'center',}}>
                                    <View style={styles.cardflex} transparent>
                                        <Image source={earn_watch} style={styles.cardImg} resizeMode="contain" />
                                        <Text style={styles.cardText1}>Watch Ad</Text>
                                        <Text style={styles.cardText2}>+50 Coins</Text>
                                    </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.cardright}>
                            <Card style={styles.Card}>
                                <CardItem style={{backgroundColor: '#4f5360',borderRadius: 15,borderWidth: 0,}}>
                                    <Body style={{alignItems: 'center',}}>
                                    <View style={styles.cardflex} transparent>
                                        <Image source={earn_invite} style={styles.cardImg} resizeMode="contain" />
                                        <Text style={styles.cardText1}>Invite Friends</Text>
                                        <Text style={styles.cardText2}>+1000 Coins</Text>
                                    </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View style={styles.cardleft}>
                            <Card style={styles.Card}>
                                <CardItem style={{backgroundColor: '#4f5360',borderRadius: 15,borderWidth: 0,}}>
                                    <Body style={{alignItems: 'center',}}>
                                    <View style={styles.cardflex} transparent>
                                        <Image source={earn_confb} style={styles.cardImg} resizeMode="contain" />
                                        <Text style={styles.cardText1}>Connect FB</Text>
                                        <Text style={styles.cardText2}>+500 Coins</Text>
                                    </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.cardright}>
                            <Card style={styles.Card}>
                                <CardItem style={{backgroundColor: '#4f5360',borderRadius: 15,borderWidth: 0,}}>
                                    <Body style={{alignItems: 'center',}}>
                                    <View style={styles.cardflex} transparent>
                                        <Image source={earn_rateus} style={styles.cardImg} resizeMode="contain" />
                                        <Text style={styles.cardText1}>Rate US</Text>
                                        <Text style={styles.cardText2}>+250 Coins</Text>
                                    </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View style={styles.cardleft}>
                            <Card style={styles.Card}>
                                <CardItem style={{backgroundColor: '#4f5360',borderRadius: 15,borderWidth: 0,}}>
                                    <Body style={{alignItems: 'center',}}>
                                    <View style={styles.cardflex} transparent>
                                        <Image source={earn_likeus} style={styles.cardImg} resizeMode="contain" />
                                        <Text style={styles.cardText1}>Like Us On FB</Text>
                                        <Text style={styles.cardText2}>+500 Coins</Text>
                                    </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={styles.cardright}>
                            <Card style={styles.Card}>
                                <CardItem style={{backgroundColor: '#4f5360',borderRadius: 15,borderWidth: 0,}}>
                                    <Body style={{alignItems: 'center',}}>
                                    <View style={styles.cardflex} transparent>
                                        <Image source={earn_buycoins} style={styles.cardImg} resizeMode="contain" />
                                        <Text style={styles.cardText1}>Buy Coins</Text>
                                        <Text style={styles.cardText2}>Costs Real Money</Text>
                                    </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>                    
                </ImageBackground>
            </Content>
        </Container>
    );
  }
}

export default Setting;
