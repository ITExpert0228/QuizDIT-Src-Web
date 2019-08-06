import React, {Component} from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Button, } from 'native-base';
import Carousel from 'react-native-snap-carousel';

import header_item from '../../assets/img/header_item.png';
import styles from './styles';
import bg from '../../assets/img/dark_bg.png';
import cardImg from '../../assets/img/quizes/cardImg.png';
import buttonBg from '../../assets/img/quizes/buttonBg.png';

const { width, height }  = Dimensions.get('window');

const sliderWidth = width;
const itemWidth = width/1.5;
class Slide extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            entries: Array(
                title => 'Beautiful and dramatic Antelope Canyon',
                subtitle =>  'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration =>  'https://i.imgur.com/UYiroysl.jpg',
            ),
            validate: {
                emailState: ''
            },
            test: 'testing'
        }
        this._renderItem = this._renderItem.bind(this);
        this.redirectRoute = this.redirectRoute.bind(this);
    }
    redirectRoute(route) {
        const { navigation }  = this.props;
        navigation.navigate(route);
    };
    // async openDrawer() {
    //     const { navigation }  = this.props;
    //     navigation.mergeOptions('SideMenuContainer', {
    //         sideMenu: {
    //             left: {
    //                 visible: true
    //             }
    //         }
    //     })
    // }
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <View style={styles.backgroundView}>
                    <Image source={cardImg} style={styles.cardImg} resizeMode="contain" />
                </View>
                <View style={styles.upView}>

                </View>
                <View style={styles.donwView}>
                    <Text style={styles.title}>Art & Design</Text>
                    <Text style={styles.writing}>Fusce vehicula dolor arcu.</Text>
                    <Text style={styles.writing}>sit amet blandit dolor</Text>
                    <Button style={styles.button} onPress={()=>this.redirectRoute('Gamecreate')} transparent>
                        <ImageBackground source={buttonBg} style={styles.buttonBg}>
                            <View style={styles.just}>
                                <Text style={styles.buttonText}>Unlock Quizes</Text>
                                <Text style={styles.buttonCoins}>250 Coins</Text>
                            </View>
                        </ImageBackground>
                    </Button>
                </View>
            </View>
        );
    }
    
    render () {
        const { slider1ActiveSlide } = this.state;
        return (
            <ImageBackground source={bg} style={styles.bg_container}>
                <View style={styles.header} transparent>
                    {/* <TouchableOpacity onPress={()=>this.props.openDrawer()}> */}
                    <TouchableOpacity onPress={()=>this.redirectRoute('Sidebar')}>
                        <Image source={header_item} style={styles.header_item} resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={{ flex: 0.9, alignItems: 'center', }}>
                        <Text style={styles.headerText}>QUIZES</Text>
                    </View>
                </View>   
                <Text style={styles.descriptionText}>Choose Your Path</Text>     
                <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                >
                </Carousel>
            </ImageBackground>
        );
    }
}

export default Slide;
