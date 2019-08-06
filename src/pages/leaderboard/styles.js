import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

const { width, height }  = Dimensions.get('window');

export default StyleSheet.create({
    bg_container: {
        width: '100%',
        height: Platform.OS === 'web'? height : "auto",
        minHeight: Platform.OS === 'ios' ? height : height - StatusBar.currentHeight,
    },
    header: {
        height: 0.05*height,
        alignItems: 'center',
        flexDirection: 'row',
    },
    item: {
        width: 0.04*width,
        height: 0.04*width,
        marginLeft: 16,
    },
    mainImg: {
        width: 0.23*width,
        height: 0.23*width,
        alignSelf: 'center',
        marginTop: 30,
        position: 'absolute',
    },
    crown: {
        width: 0.15*width,
        height: 0.1*width,
        alignSelf: 'center',
        marginBottom: 0,
    },
    leaderRank: {
        width: 0.07*width,
        height: 0.07*width,
        position: 'relative',
        alignSelf: 'center',
        marginLeft: 0.15*width,
        marginTop: 0.14*width,
    },
    mainName: {
        color: '#ffffff',
        fontSize: 32,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 0,
    },
    mainPoints: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#9da0a7',
        marginTop: 0,
    },
    userBox: {

    },
    userRow: {
        flexDirection: 'row',
    },
    userCardout: {
        flex: 0.385,
    },
    userCardin: {
        flex: 0.23,
    },
    userPic: {
        width: 0.23*width,
        height: 0.23*width,
        alignSelf: 'center',
        marginTop: 30,
        position: 'absolute',
        marginBottom: 0,
    },
    rankout: {
        width: 0.07*width,
        height: 0.07*width,
        marginLeft: 0.22*width,
        marginTop: 0.24*width,
    },
    rankin: {
        width: 0.07*width,
        height: 0.07*width,
        marginLeft: 0.15*width,
        marginTop: 0.24*width,
    },
    userName: {
        color: '#ffffff',
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 0,
    },
    userPoints: {
        fontSize: 12,
        alignSelf: 'center',
        color: '#9da0a7',
        marginTop: 0,
    },
    footer: {
        height: 0.075*height,
        // alignItems: 'center',
        flexDirection: 'row',
    },

})