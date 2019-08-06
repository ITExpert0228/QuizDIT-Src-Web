
import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Footer, Card, Form, Item, Input, Button, Icon, Label,Right, Left, Body, CardItem, Title } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import bg from '../../assets/img/dark_bg.png';
import header_item from '../../assets/img/header_item.png';
import searchIcon from '../../assets/img/mychats/searchIcon.png';
import msgIndicator from '../../assets/img/mychats/msgIndicator.png';
import moreArrow from '../../assets/img/mychats/moreArrow.png';
import pic1 from '../../assets/img/mychats/pic1.png';
import pic2 from '../../assets/img/mychats/pic2.png';
import pic3 from '../../assets/img/mychats/pic3.png';
import pic4 from '../../assets/img/mychats/pic4.png';
import pic5 from '../../assets/img/mychats/pic5.png';
import chaticon from '../../assets/img/mychats/chaticon.png';
import buttonBase from '../../assets/img/mychats/buttonBase.png';


import styles from "./styles";

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
        <Content >
            <ImageBackground source={bg} style={styles.bg_container}>
              <View style={styles.header} transparent>
                <TouchableOpacity onPress={()=>this.redirectRoute('Sidebar')}>
                  <Image source={header_item} style={styles.item} resizeMode="contain" />
                </TouchableOpacity>
                <View style={{ flex: 0.9, alignItems: 'center', }}>
                  <Text style={styles.headerText}>MY CHATS</Text>
                </View>
              </View>
                <View style={styles.searchContent} transparent searchBar rounded>
                    <Item style={styles.searchBar}>
                        <Image source={searchIcon} style={styles.searchIcon} resizeMode="contain" />
                        <Input style={styles.searchInput} placeholder="Search Conversation" />
                    </Item>
                </View>
                <Card style={styles.card} transparent>
                  <TouchableOpacity onPress={() => this.redirectRoute('Singlechat')}>
                    <CardItem style={styles.CardItem}  transparent>
                        <View style={{flex: 0.3}}>
                            <Image source={pic1} style={styles.CardItemImg} resizeMode="contain" />                           
                        </View>
                        <View style={{flex: 0.85}} transparent>
                            <Text style={styles.name}>Grayson Pierce</Text>
                            <Text style={styles.chatmsg}>haha, I beat you Jason!</Text>
                            <Text style={styles.time}>Now</Text>
                        </View>
                        <View style={styles.iconView}>
                          <Image source={msgIndicator} style={styles.moreIcon} resizeMode="contain" />                           
                        </View>
                        <View style={styles.iconView}>                                 
                          <Image source={moreArrow} style={styles.moreIcon} resizeMode="contain" />                           
                        </View>
                    </CardItem>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.redirectRoute('Singlechat')}>
                    <CardItem style={styles.CardItem} transparent>
                        <View style={{flex: 0.3}}>
                            <Image source={pic2} style={styles.CardItemImg} resizeMode="contain" />                           
                        </View>
                        <View style={{flex: 0.85}} transparent>
                            <Text style={styles.name}>Hilda Ramsey</Text>
                            <Text style={styles.chatmsg}>Cross quis nulla commodo.</Text>
                            <Text style={styles.time}>22:39</Text>
                        </View>
                        <View style={styles.iconView}>
                          <Image source={moreArrow} style={styles.moreIcon} resizeMode="contain" />                           
                        </View>
                    </CardItem>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.redirectRoute('Singlechat')}>
                    <CardItem style={styles.CardItem} transparent>
                        <View style={{flex: 0.3}}>
                            <Image source={pic3} style={styles.CardItemImg} resizeMode="contain" />                           
                        </View>
                        <View style={{flex: 0.85}} transparent>
                            <Text style={styles.name}>Eddie Peterson</Text>
                            <Text style={styles.chatmsg}>Donec falcillsis tortor ut</Text>
                            <Text style={styles.time}>08:30</Text>
                        </View>
                        <View style={styles.iconView}>
                          <Image source={moreArrow} style={styles.moreIcon} resizeMode="contain" />                           
                        </View>
                    </CardItem>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.redirectRoute('Singlechat')}>
                    <CardItem style={styles.CardItem} transparent>
                        <View style={{flex: 0.3}}>
                            <Image source={pic4} style={styles.CardItemImg} resizeMode="contain" />                           
                        </View>
                        <View style={{flex: 0.85}} transparent>
                            <Text style={styles.name}>Isabella Cole</Text>
                            <Text style={styles.chatmsg}>Fusce vehicula dolor arcu, sit</Text>
                            <Text style={styles.time}>03:30</Text>
                        </View>
                        <View style={styles.iconView}>
                          <Image source={moreArrow} style={styles.moreIcon} resizeMode="contain" />                           
                        </View>
                    </CardItem>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.redirectRoute('Singlechat')}>
                    <CardItem style={styles.CardItem} transparent>
                        <View style={{flex: 0.3}}>
                            <Image source={pic5} style={styles.CardItemImg} resizeMode="contain" />                           
                        </View>
                        <View style={{flex: 0.85}} transparent>
                            <Text style={styles.name}>Leonard Fletcher</Text>
                            <Text style={styles.chatmsg}>Nam dapibus nisi vitae elit</Text>
                            <Text style={styles.time}>Yesterday</Text>
                        </View>
                        <View style={styles.iconView}>
                          <Image source={moreArrow} style={styles.moreIcon} resizeMode="contain" />                           
                        </View>
                    </CardItem>   
                  </TouchableOpacity>
                </Card>
            </ImageBackground>
        </Content>
        <Footer style={styles.footer}>
          <ImageBackground source={buttonBase} style={styles.footer_bg}>
            <Button style={styles.imgBgView} transparent onPress={() => this.redirectRoute('Singlechat')}>
              <Image source={chaticon} style={styles.msgbutton} resizeMode="contain" />                           
              <Text style={styles.facebookButtonTtext}>New Chat</Text>
            </Button>
          </ImageBackground>
        </Footer>
      </Container>
    );
  }
}

export default Setting;
