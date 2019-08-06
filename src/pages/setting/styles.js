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
    divText: {
        color: '#969997',
        fontSize: 14,
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 16,
    },
    accountCard: {
        backgroundColor: '#969997',
        marginHorizontal: 16,
    },

    buttonCard: {
        marginHorizontal: 16,
        marginVertical: 8,
        height: 0.12*height,
        borderRadius: 20,
        backgroundColor: '#4f5360',
        paddingRight: 0,
    },
    viewflex: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    fleximg: {
        flex: 0.15,
    },
    mailImg: {
        width: 0.1*width,
        height: 0.1*width,
        // alignSelf: 'center',
        // justifyContent: 'center',
    },
    flexText: {
        flex: 0.75,
        justifyContent: 'center',
        width: 0.75*width,
    },
    cardText1: {
        color: '#ffffff',
    },
    cardText2: {
        color: '#969997',
    },
    flexArrow: {
        flex: 0.05,
        justifyContent: 'center',
    },
    arrowIcon: {
        alignSelf: 'flex-end',
        right: 0,
        width: 0.025*width,
        height: 0.025*width,
    },
    facebookButton: {
        width: '100%',
        height: 0.07*height,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#63697d',
    },
    facebookButtonTtext: {
        color: '#ffffff',
    }
})