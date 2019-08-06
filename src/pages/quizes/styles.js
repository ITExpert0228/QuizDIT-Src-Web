import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
// import { black } from 'ansi-colors';

const { width, height }  = Dimensions.get('window');
const card_w = width/1.5;
const card_h = width*8/7;

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
    header_item: {
        // width: 0.04*width,
        // marginLeft: 16,
        width: 0.04*width,
        height: 0.04*width,
        alignSelf: 'flex-end',
        margin: 16,
    },
    headerText: {
        flex: 0.95,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 5,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    descriptionText: {
        color: '#9d9fa4',
        fontSize: 16,
        alignSelf: "center",
        fontWeight: 'bold',
        marginTop: 6,
    },
    slide: {
        marginTop: 0.09*height,
        borderColor: '#ff0000',
        borderWidth: 0,
        height: card_h,
        flexDirection: 'column',
    },
    backgroundView: {
        position: 'absolute',
    },
    cardImg: {
        width: card_w,
        height: card_h,
        margin: 0,
    },
    upView: {
        flex: 1,
    },
    downView: {
        flex: 0.5,
    },
    title: {
        alignSelf: 'center',
        fontSize: 36,
        color: '#000000',
    },
    writing: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#777777',
    },
    button: {
        alignSelf: 'center',
        height: 0.15*height,
    },
    buttonBg: {
        alignSelf: 'center',
        height: 0.08*height,
        width: 0.32*height,
        flexDirection: 'column',
        alignItems: 'center',
    },
    just: {
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: 7,
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonCoins: {
        fontSize: 12,
        color: '#ffffff',
        justifyContent: 'center',
        alignSelf: 'center',

    },

})