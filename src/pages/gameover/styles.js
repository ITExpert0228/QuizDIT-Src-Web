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
    },
    item: {
        width: 0.045*width,
        marginVertical: 15,
    },
    playerImg: {
        width: 0.36*width,
        height: 0.36*width,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 0.14*height,
    },
    match: {
        flexDirection: 'row',
        marginLeft: 0.17*width,
        marginTop: 0.28*height,
    },
    acheive: {
        width: 0.18*width,
        height: 0.1*width,
        alignSelf: 'center',
        marginLeft: 0.1*width,
    },
    coins: {
        width: 0.18*width,
        height: 0.1*width,
        alignSelf: 'center',
        marginLeft: 0.1*width,
    },
    great: {
        color: '#ffffff',
        marginTop: 0.03*height,
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    description: {
        color: '#ffffff',
        marginTop: 0.015*height,
        fontSize: 16,
        alignSelf: 'center',
    },
    coinsamount: {
        color: '#ffffff',
        marginTop: 0.015*height,
        fontSize: 16,
        alignSelf: 'center',
    },
    shareButton: {
        width: 0.8*width,
        height: 0.08* height,
        borderRadius: 30,
        borderColor: '#ffffff',
        borderWidth: 2,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 0.18*height,
        flexDirection: 'column',
    },
    shareIcon: {
        width: 0.04*width,
        alignItems: 'center',
    },
    shareText: {
        color: '#ffffff',
        alignSelf: 'center',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    takeButton: {
        width: 0.8*width,
        height: 0.08* height,
        borderWidth: 0,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 0.03*height,
    },
    buttonBg: {
        width: 0.8*width,
        height: 0.08* height,
        alignItems: 'center',
    },
    takeInView: {
        // alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    takeText: {
        // alignItems: 'center',
        marginTop: 0.028*height ,
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
})