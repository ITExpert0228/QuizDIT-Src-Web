import React from "react";
import { StatusBar, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { GiftedChat, MessageText } from "react-web-gifted-chat";

import styles from './styles.js';
import bg from '../../assets/img/dark_bg.png';
import chatman from '../../assets/img/singlechat/chatman.png';

import backIcon from '../../assets/img/molecular/backIcon.png';
import propertyICon from '../../assets/img/molecular/propertyIcon.png';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  redirectRoute(route) {
    this.props.navigation.goBack();
  }
  state = {
    messages: []
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
            _id: 1,
            text: 'Hey! Up for a challenge?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              text: 'Hey! Up for a challenge?',
              createdAt: new Date(),
            },
        },
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  // get user() {
  //   return {
  //     name: this.props.navigation.state.params.name,
  //     email: this.props.navigation.state.params.email,
  //     avatar: this.props.navigation.state.params.avatar,
  //     _id: firebaseSvc.uid,
  //   };
  // }
  render() {

    const renderMessageText = (props) => {
      return (
        <View style={props.pending? {backgroundColor: '#f00'} : {backgroundColor: '#00dfd7'}}>
          <MessageText {...props} />
        </View>
      )
    }
    const renderTime = () => {
      return null
    }
    const renderDay  = () => {
      return null
    }

    return ( 
        <View style={{ flex: 1 , backgroundColor: '#2e313c'}}>
            <View style={styles.chatmanBox}>
              <View style={styles.header} transparent>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Image source={backIcon} style={styles.backIcon} resizeMode="contain" />
                </TouchableOpacity>
                <View style={{ flex: 0.95, alignItems: 'center', }}>
                </View>
                <TouchableOpacity onPress={() => this.redirectRoute('Quizes')}>
                  <Image source={propertyICon} style={styles.propertyICon} resizeMode="contain" />
                </TouchableOpacity>
              </View>
              <View>
                <Image source={chatman} style={styles.chatman} resizeMode="contain" />
                <Text style={styles.fieldName}>Grayson Pierce</Text>
                <Text style={styles.fieldStatus}>OnlineNow</Text>
              </View>
            </View>
            <StatusBar barStyle="light-content" />
            <GiftedChat messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user = {this.user}
                renderAvatar={null}
                // renderMessageText   = { renderMessageText    }
                renderTime  = { renderTime  }
                // renderDay  = { renderDay  }
                // renderUsernameOnMessage = { true}  //username on bottom
                // inverted  = {false}  //inverse order
            />
        </View>
    )
  }
}


export default Chat;