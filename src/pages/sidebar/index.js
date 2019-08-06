import React from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native';
import styles from './styles'
import bg from '../../assets/img/dark_bg.png';
import closeIcon from '../../assets/img/sidebar/closeIcon.png';
import pic from '../../assets/img/sidebar/pic.png';
import quizesIcon from '../../assets/img/sidebar/quizesIcon.png';
import mychatIcon from '../../assets/img/sidebar/mychatIcon.png';
import leaderboardIcon from '../../assets/img/sidebar/leaderboardIcon.png';
import notificationsIcon from '../../assets/img/sidebar/notificationsIcon.png';
import earncoinsIcon from '../../assets/img/sidebar/earncoinsIcon.png';
import settingIcon from '../../assets/img/sidebar/settingIcon.png';
import logoutIcon from '../../assets/img/sidebar/logoutIcon.png';
import { Button } from 'native-base';

import GLOBAL from "../../global.js";

const images = {};
const globalStyles = {};
// const items = [
//     { name: 'Quizes',              routeName: 'Quizes',    icon: images.profile_icon },
//     { name: 'Mychats',            routeName: 'Mychats',  icon: images.map_icon },
//     { name: 'Leaderboard',             routeName: 'Leaderboard',   icon: images.setting_icon },
//     { name: 'Notifications',              routeName: 'Notifications',    icon: images.help_icon },
//     { name: 'Earncoins',              routeName: 'Earncoins',        icon: images.logout_icon },
// ];

export default class SideBar extends React.Component {
    constructor() {
        super();
    }

    async redirectRoute(route) {
        const { navigation }  = this.props;
        navigation.navigate(route);
    }
    async openDrawer() {
        const { navigation }  = this.props;
        navigation.mergeOptions('SideMenuContainer', {
            sideMenu: {
                left: {
                    visible: true
                }
            }
        })
    }
    closeDrawer() {
        const { navigation }  = this.props;
        navigation.mergeOptions('SideMenuContainer', {
            sideMenu: {
                left: {
                    visible: false
                }
            }
        })
    }

    render() {
        const { navigation }  = this.props;
        return (
            <ImageBackground source={bg} style={styles.bg_container}>
                {/* <View style={styles.container}>
                    <View style={globalStyles.overlay} >
                        <Image source={images.menu_background} style={globalStyles.background} />
                    </View> */}
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={closeIcon} style={styles.closeIcon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.redirectRoute("Profile")}>
                        <Image source={require('../../assets/img/leaderboard/'+GLOBAL.player.avatar)} style={styles.pic}></Image>
                    </TouchableOpacity>
                    <Text style={styles.fieldName}>{GLOBAL.player.fname}</Text>
                    <Text style={styles.coins}>{GLOBAL.player.points} Coins</Text>
                    <View style={styles.listBox}>
                        <TouchableOpacity onPress={() => this.redirectRoute('Quizes')}>
                            <View style={styles.iconList}>
                                <Image source={quizesIcon} style={styles.listIcon}></Image>
                                <Text style={styles.listText}>Quizes</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.redirectRoute('Mychats')}>
                            <View style={styles.iconList}>
                                <Image source={mychatIcon} style={styles.listIcon}></Image>
                                <Text style={styles.listText}>My Chats</Text>
                            </View>                               
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.redirectRoute('Leaderboard')}>
                            <View style={styles.iconList}>
                                <Image source={leaderboardIcon} style={styles.listIcon}></Image>
                                <Text style={styles.listText}>Leaderboard</Text>
                            </View>                               
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.redirectRoute('Notifications')}>
                            <View style={styles.iconList}>
                                <Image source={notificationsIcon} style={styles.listIcon}></Image>
                                <Text style={styles.listText}>Notifications</Text>
                            </View>     
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.redirectRoute('Earncoins')}>
                            <View style={styles.iconList}>
                                <Image source={earncoinsIcon} style={styles.listIcon}></Image>
                                <Text style={styles.listText}>Earn Coins</Text>
                            </View>    
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Button style={styles.settingButton} onPress={() => this.redirectRoute('Setting')} transparent>
                            <View style={styles.buttonInView}>
                                <Image source={settingIcon} style={styles.buttonIcon}></Image>
                                <Text style={styles.buttonText}>Settings</Text>
                            </View>
                        </Button>
                        <Button style={styles.settingButton} onPress={() => this.redirectRoute('Login')} transparent>
                            <View style={styles.buttonInView}>
                                <Image source={logoutIcon} style={styles.buttonIcon}></Image>
                                <Text style={styles.buttonText}>Log Out</Text>
                            </View>
                        </Button>
                    </View>

                    {/* {items.map((item, index) => {
                        return (
                            <TouchableOpacity activeOpacity={1} key={index} style={styles.item} onPress={() => this.redirectRoute(item.routeName)}>
                                { item.icon && <Image source={item.icon} style={styles.iconImage} /> }
                                <Text style={item.icon ? styles.itemNameText : styles.itemSText}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}      */}
            </ImageBackground>
        )
    }
}
