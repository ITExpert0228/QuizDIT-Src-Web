import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, Dimensions,} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Label,Right, Left, Body, CardItem, Title } from 'native-base';
import * as Animatable from 'react-native-animatable';
// import MakeItRain from '../animother/index';

import bg from '../../assets/img/gameover/bg.png';
import header_item from '../../assets/img/header_item.png';
import player from '../../assets/img/gameover/player.png';
import acheive from '../../assets/img/gameover/acheive.png';
import coins from '../../assets/img/gameover/coins.png';
import shareIcon from '../../assets/img/gameover/shareIcon.png';
import buttonBg from '../../assets/img/gameover/buttonBg.png';

import styles from "./styles";

import red from '../../assets/img/animation/red.png';
import blue from '../../assets/img/animation/blue.png';
import green from '../../assets/img/animation/green.png';
import pink from '../../assets/img/animation/pink.png';
import yellow from '../../assets/img/animation/yellow.png';


import GLOBAL from "../../global.js";

var size = 12;//10*Math.random()+6;
var MONEY_DIMENSIONS = { width: size, height: size };
var SCREEN_DIMENSIONS = Dimensions.get('window');
var WIGGLE_ROOM = 50;

const { width, height } = SCREEN_DIMENSIONS;

const FlippingImage = ({ back = false, delay, duration = 1000, source, style = {width: size, height: size,} }) => (
  <Animatable.Image
    animation={{
      from: { rotateX: back ? '0deg' : '180deg', rotateY: back ? '0deg' : '180deg', rotate: !back ? '180deg' : '0deg' },
      to: { rotateX: back ? '360deg' : '-180deg', rotateY: back ? '360deg' : '-180deg', rotate: !back ? '180deg' : '0deg' },
    }}
    duration={duration}
    delay={delay}
    easing="linear"
    iterationCount="infinite"
    useNativeDriver
    source={source}
    style={{
      ...style,
      backfaceVisibility: 'hidden',
    }}
  />
);

const Swinging = ({ amplitude, rotation = 7, delay, duration = 700, children }) => (
  <Animatable.View
    animation={{
      0: {
        translateX: -amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${rotation}deg`,
      },
      0.5: {
        translateX: -10,
        translateY: -10,
        rotate: '30deg',
      },
      1: {
        translateX: amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${-rotation}deg`,
      },
    }}
    delay={delay}
    duration={duration}
    direction="alternate"
    easing="ease-in-out"
    iterationCount="infinite"
    useNativeDriver
  >
    {children}
  </Animatable.View>
);

const Falling = ({ duration, delay, style, children }) => (
  <Animatable.View
    animation={{
      from: { translateY: -MONEY_DIMENSIONS.height - WIGGLE_ROOM },
      to: { translateY: SCREEN_DIMENSIONS.height + WIGGLE_ROOM },
    }}
    duration={duration}
    delay={delay}
    easing={t => Math.pow(t, 1)}
    iterationCount="infinite"
    useNativeDriver
    style={style}
  >
    {children}
  </Animatable.View>
);

const ErlichBachman = ({ children }) => (
  <ImageBackground source={bg} style={{ flex: 1 }}>
    {children}
  </ImageBackground>
);

const randomize = max => Math.random() * max;

const range = count => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
};

// var flakesCount = 50;
    // async redirectRoute(route) {
    //     const { navigation }  = this.props;
    //     navigation.navigate(route);
    // }

// const MakeItRain = ({ flakesCount = 50, count = 10, duration = 3000 }) => (
    // const MakeItRain = ({ count = 30, duration = 4000 }) => (
var count = 10;
var duration = 3000;
class MakeItRain extends Component {
  constructor(props) {
    super(props);
  }
  async redirectRoute(route) {
    const { navigation }  = this.props;
    navigation.navigate(route);
  }
  render() {
    return (
  <ErlichBachman>
    {range(count)
      .map(i => randomize(500))
      .map((flipDelay, i) => (
        <Falling
          key={i}
          duration={duration}
          delay={i * (duration / count)}
          style={{
            position: 'absolute',
            // width: 49,//*Math.random(),
            paddingHorizontal: WIGGLE_ROOM,
            // width: ++ 0.01*width,
            left: randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) - WIGGLE_ROOM,
          }}
        >
          <Swinging amplitude={MONEY_DIMENSIONS.width / 5} delay={randomize(duration)}>
            
            <FlippingImage source={red} delay={flipDelay} />
            <FlippingImage
              source={red}
              delay={flipDelay}
              back
              style={{ position: 'absolute', }}//, opacity: 0, width: 49*Math.random(),}}
            />
            {/* Render flakesCount number of flakes */}
            
          </Swinging>
        </Falling>
      ))}

      {range(count)
      .map(i => randomize(1000))
      .map((flipDelay, i) => (
        <Falling
          key={i}
          duration={duration}
          delay={i * (duration / count)}
          style={{
            position: 'absolute',
            // width: 49,//*Math.random(),
            paddingHorizontal: WIGGLE_ROOM,
            // width: ++ 0.01*width,
            left: randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) - WIGGLE_ROOM,
          }}
        >
          <Swinging amplitude={MONEY_DIMENSIONS.width / 5} delay={randomize(duration)}>
            
            <FlippingImage source={blue} delay={flipDelay} />
            <FlippingImage
              source={blue}
              delay={flipDelay}
              back
              style={{ position: 'absolute', }}//, opacity: 0, width: 49*Math.random(),}}
            />
            {/* Render flakesCount number of flakes */}
            
          </Swinging>
        </Falling>
      ))}

    {range(count)
      .map(i => randomize(1000))
      .map((flipDelay, i) => (
        <Falling
          key={i}
          duration={duration}
          delay={i * (duration / count)}
          style={{
            position: 'absolute',
            // width: 49,//*Math.random(),
            paddingHorizontal: WIGGLE_ROOM,
            // width: ++ 0.01*width,
            left: randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) - WIGGLE_ROOM,
          }}
        >
          <Swinging amplitude={MONEY_DIMENSIONS.width / 5} delay={randomize(duration)}>

            <FlippingImage source={green} delay={flipDelay} />
            <FlippingImage
              source={green}
              delay={flipDelay}
              back
              style={{ position: 'absolute', }}//, opacity: 0, width: 49*Math.random(),}}
            />
            {/* Render flakesCount number of flakes */}

          </Swinging>
        </Falling>
      ))}

    {range(count)
      .map(i => randomize(1000))
      .map((flipDelay, i) => (
        <Falling
          key={i}
          duration={duration}
          delay={i * (duration / count)}
          style={{
            position: 'absolute',
            // width: 49,//*Math.random(),
            paddingHorizontal: WIGGLE_ROOM,
            // width: ++ 0.01*width,
            left: randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) - WIGGLE_ROOM,
          }}
        >
          <Swinging amplitude={MONEY_DIMENSIONS.width / 5} delay={randomize(duration)}>

            <FlippingImage source={pink} delay={flipDelay} />
            <FlippingImage
              source={pink}
              delay={flipDelay}
              back
              style={{ position: 'absolute', }}//, opacity: 0, width: 49*Math.random(),}}
            />
            {/* Render flakesCount number of flakes */}

          </Swinging>
        </Falling>
      ))}

    {range(count)
      .map(i => randomize(1000))
      .map((flipDelay, i) => (
        <Falling
          key={i}
          duration={duration}
          delay={i * (duration / count)}
          style={{
            position: 'absolute',
            // width: 49,//*Math.random(),
            paddingHorizontal: WIGGLE_ROOM,
            // width: ++ 0.01*width,
            left: randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) - WIGGLE_ROOM,
          }}
        >
          <Swinging amplitude={MONEY_DIMENSIONS.width / 5} delay={randomize(duration)}>

            <FlippingImage source={yellow} delay={flipDelay} />
            <FlippingImage
              source={yellow}
              delay={flipDelay}
              back
              style={{ position: 'absolute', }}
            />
          </Swinging>
        </Falling>
      ))}


    <View style={styles.playerView}>
      <Image source={require('../../assets/img/leaderboard/'+GLOBAL.player.avatar)} style={styles.playerImg} resizeMode="contain" />
      <View style={styles.match}>
        <Image source={acheive} style={styles.acheive} resizeMode="contain" />
        <Image source={coins} style={styles.coins} resizeMode="contain" />
      </View>
      <Text style={styles.great}>Congrates!</Text>
      <Text style={styles.description}>You unlocked a badge & earned</Text>
      <Text style={styles.coinsamount}>+1000 free coins!</Text>
    </View>
    <Button style={styles.shareButton} bordered>
      <View style={{ flexDirection: 'row', }}>
        <Image source={shareIcon} style={styles.shareIcon} resizeMode="contain" />
        <Text style={styles.shareText}>Share Results</Text>
      </View>
    </Button>
    <Button style={styles.takeButton} onPress={() => this.redirectRoute('Quizes')} transparent >
      <ImageBackground source={buttonBg} style={styles.buttonBg} resizeMode="contain" >
        <View style={styles.takeInView}>
          <Text style={styles.takeText}>Take New Quiz</Text>
        </View>
      </ImageBackground>
    </Button>

  </ErlichBachman>
);
}
}

export default MakeItRain;
