import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button,  } from 'native-base';
import * as Animatable from 'react-native-animatable';
// import MakeItRain from '../animother/index';
import styles from "./styles";

import bg from '../../assets/img/dark_bg.png';
import header_item from '../../assets/img/header_item.png';
import mainPic from '../../assets/img/leaderboard/mainPic.png';
import leaderRank from '../../assets/img/leaderboard/leaderRank.png';
import crown from '../../assets/img/leaderboard/crown.png';
import rank2 from '../../assets/img/leaderboard/rank2.png';
import rank3 from '../../assets/img/leaderboard/rank3.png';
import rank4 from '../../assets/img/leaderboard/rank4.png';
import rank5 from '../../assets/img/leaderboard/rank5.png';
import rank6 from '../../assets/img/leaderboard/rank6.png';
import rank7 from '../../assets/img/leaderboard/rank7.png';
import userPic1 from '../../assets/img/leaderboard/userPic1.png';
import userPic2 from '../../assets/img/leaderboard/userPic2.png';
import userPic3 from '../../assets/img/leaderboard/userPic3.png';
import userPic4 from '../../assets/img/leaderboard/userPic4.png';
import userPic5 from '../../assets/img/leaderboard/userPic5.png';
import userPic6 from '../../assets/img/leaderboard/userPic6.png';

import red from '../../assets/img/animation/red.png';
import blue from '../../assets/img/animation/blue.png';
import green from '../../assets/img/animation/green.png';
import pink from '../../assets/img/animation/pink.png';
import yellow from '../../assets/img/animation/yellow.png';

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
  <ImageBackground source={bg} style={styles.bg_container}>
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

var flakesCount = 50;
var count = 10;
var duration = 3000 ;
// const MakeItRain = ({ flakesCount = 50, count = 10, duration = 3000 }) => (
    // const MakeItRain = ({ count = 30, duration = 4000 }) => (
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
      <Container>
        <Content >
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

            <View style={styles.header} transparent>
              <TouchableOpacity onPress={()=>this.redirectRoute('Sidebar')}>
                <Image source={header_item} style={styles.item} resizeMode="contain" />
              </TouchableOpacity>
            </View>
            <View style={styles.mainView}>
              <Image source={mainPic} style={styles.mainImg} resizeMode="contain" />
              <Image source={crown} style={styles.crown} resizeMode="contain" />
              <Image source={leaderRank} style={styles.leaderRank} resizeMode="contain" />
              <Text style={styles.mainName}>Caleb Johns</Text>
              <Text style={styles.mainPoints}>Points:20,805,389</Text>
            </View>
            <View style={styles.userBox}>
              <View style={styles.userRow}>
                <View style={styles.userCardout}>
                  <Image source={userPic1} style={styles.userPic} resizeMode="contain" />
                  <Image source={rank2} style={styles.rankout} resizeMode="contain" />
                  <Text style={styles.userName}>Jane Gibson</Text>
                  <Text style={styles.userPoints}>1,498,035</Text>
                </View>
                <View style={styles.userCardin}>
                  <Image source={userPic2} style={styles.userPic} resizeMode="contain" />
                  <Image source={rank3} style={styles.rankin} resizeMode="contain" />
                  <Text style={styles.userName}>Jorge Fuller</Text>
                  <Text style={styles.userPoints}>457,842</Text>
                </View>
                <View style={styles.userCardout}>
                  <Image source={userPic3} style={styles.userPic} resizeMode="contain" />
                  <Image source={rank4} style={styles.rankout} resizeMode="contain" />
                  <Text style={styles.userName}>Alta Cortez</Text>
                  <Text style={styles.userPoints}>84,683</Text>
                </View>
              </View>
              <View style={styles.userRow}>
                <View style={styles.userCardout}>
                  <Image source={userPic4} style={styles.userPic} resizeMode="contain" />
                  <Image source={rank5} style={styles.rankout} resizeMode="contain" />
                  <Text style={styles.userName}>Sam Waters</Text>
                  <Text style={styles.userPoints}>4,387</Text>
                </View>
                <View style={styles.userCardin}>
                  <Image source={userPic5} style={styles.userPic} resizeMode="contain" />
                  <Image source={rank6} style={styles.rankin} resizeMode="contain" />
                  <Text style={styles.userName}>Roger Sims</Text>
                  <Text style={styles.userPoints}>3,240</Text>
                </View>
                <View style={styles.userCardout}>
                  <Image source={userPic6} style={styles.userPic} resizeMode="contain" />
                  <Image source={rank7} style={styles.rankout} resizeMode="contain" />
                  <Text style={styles.userName}>Scott Lioyd</Text>
                  <Text style={styles.userPoints}>1,380</Text>
                </View>
              </View>
            </View>

      </ErlichBachman>
        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={{ backgroundColor: '#4a526b', }}>
            <Button style={{ backgroundColor: '#6c748d', }}>
              <Text>Friends</Text>
            </Button>
            <Button style={{ backgroundColor: '#4a526b', }}>
              <Text>Global</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
        }
      }

export default MakeItRain;
