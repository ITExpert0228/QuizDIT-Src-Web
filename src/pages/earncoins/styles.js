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
        alignSelf: 'flex-end',
        margin: 16,
    },
    headerText: {
        flex: 0.95,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 5,
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    topText: {
        color: '#969997',
        fontSize: 12,
        textAlign: 'center',
        margin: 14,
        marginTop: 0,
    },
    flexRow: {
        flexDirection: 'row',
    },
    Card: {
        margin: 0,
        height: 0.26*height,
        borderRadius: 15,
        backgroundColor: '#4f5360',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: '#4f5360',
    },
    cardleft: {
        flex: 0.5,
        padding: 8,
        paddingLeft: 16,
        paddingVertical: 3,
    },
    cardright: {
        flex: 0.5,
        padding: 8,
        paddingRight: 16,
        paddingVertical: 3,
    },
    cardflex: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImg: {
        width: 0.15 * width,
        height: 0.14*height,
        alignItems: 'center',
    },
    cardText1: {
        color: '#ffffff',
    },
    cardText2: {
        color: '#969997',
    },

})