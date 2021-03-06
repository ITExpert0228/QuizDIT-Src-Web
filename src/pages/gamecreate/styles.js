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
    backIcon: {
        width: 0.04*width,
        height: 0.04*width,
        alignSelf: 'flex-end',
        margin: 16,
    },
    headerText: {
        flex: 0.90,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 5,
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    propertyIcon: {
        flex: 0.05,
        width: 0.04*width,
        height: 0.04*width,
        alignSelf: 'flex-end',
        // margin: 16,
    },
    topText: {
        color: '#969997', fontSize: 14, alignSelf: 'center', margin: 6,
    },
    questionText: {
        color: '#ffffff',
        fontSize: 24,
        marginHorizontal: 60,
        marginVertical: 30,
        textAlign: 'center',
    },
    button: {
        borderColor: '#969997',
        marginHorizontal: 40,
        borderRadius: 10,
        height: 0.03*height,
        flex: 0.125,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4,
    },
    buttonSelect: {
        borderColor: '#969997',
        marginHorizontal: 40,
        borderRadius: 10,
        height: 0.03*height,
        flex: 0.125,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4,
        backgroundColor: '#ffffff',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    buttonTextSelect: {
        color: '#000000',
        fontSize: 16,
    },
    footer: {
        backgroundColor: '#63697d',
        width: width,
        height: 0.075*height,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagIcon: {
        flex: 0.05,
        width: 0.06*width,
        height: 0.06*width,
        marginLeft: 16,
        alignItems: 'center',
    },
    heartIcon: {
        flex: 0.05,
        width: 0.05*width,
        height: 0.05*width,
        alignItems: 'center',
        marginRight: 16,
    },
    timerView: {
        position: 'absolute',
        bottom: 0,
        bottom: 0.075*height-0.09*width,
        left: 0.41*width,
        alignItems: 'center',
    },
    timer: {
        width: 0.18*width,
        height: 0.18*width,
        bottom: 0,
    },
    input: {
        backgroundColor: '#cccccc',
        borderRadius: 5,
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
        paddingTop: 8
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
        marginTop: 0.024*height ,
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
})