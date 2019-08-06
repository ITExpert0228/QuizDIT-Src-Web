import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const { width, height }  = Dimensions.get('window');

export default StyleSheet.create({
    bg_container: {
        width: '100%',
        height: Platform.OS === 'web'? height : "auto",
        minHeight: Platform.OS === 'ios' ? height : height - StatusBar.currentHeight,
        // alignItems: 'center',
    },
    header: {
        height: 0.05*height,
        alignItems: 'center',
        flexDirection: 'row',
    },
    item: {
        width: 0.04*width,
        height: 0.04*width,
        // marginVertical: 5,
        marginLeft: 16,
        // flex: 0.05,
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
        fontSize: 14,
        alignSelf: 'center',
        marginVertical: 6,
        marginBottom: 25,
    },
    card: {
        margin: 4,
        height: 0.65*height,
        alignItems: 'center',
        flexDirection: 'column',
    },
    CardItem: {
        marginHorizontal: 16,
        padding: 0,
        marginVertical: 5,
        justifyContent: 'center',
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15,
        backgroundColor: '#4f5362',
        flexDirection: 'row',
        height: 0.13*height,
        flex: 0.2,
        width: 0.9*width,
    },
    selectCardItem: {
        marginHorizontal: 16,
        padding: 0,
        marginVertical: 5,
        justifyContent: 'center',
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15,
        backgroundColor: '#4f5362',
        flexDirection: 'row',
        height: 0.13*height,
        flex: 0.2,
        width: 0.9*width,
        borderLeftWidth: 2,
        borderLeftColor: '#00cae4',
    },
    divideL: {
        flex: 0.2,
    },
    divideR: {
        flex: 0.8,
    },
    cardImg: {
        width: 0.12*width,
        height: 0.12*width,
    },
    name: {
        color: '#ffffff',
        fontSize: 16,
    },
    timeago: {
        color: '#a1a3a9',
    },
    button: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#9ea2ae',
        fontSize: 15,
        // borderWidth: 0,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: '#9ea2ae',
    },
})