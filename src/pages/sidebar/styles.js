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
    closeIcon: {
        flex: 0.05,
        width: 0.04*width,
        height: 0.04*width,
        alignSelf: 'flex-end',
        margin: 16,
    },
    pic: {
        width: 0.23*width,
        height: 0.23*width,
        margin: 0.12*width,
        marginVertical: 0,
    },
    fieldName: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 0.12*width,
        marginTop: 0.02*height,
    },
    coins: {
        color: '#9da0a7',
        marginLeft: 0.12*width,
    },
    listBox: {
        marginLeft: 0.12*width,
        marginVertical: 0.04*height,
    },
    iconList: {
        marginVertical: 0.02*height,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listIcon: {
        width: 0.05*width,
        height: 0.05*width,
    },
    listText: {
        marginLeft: 20,
        fontSize: 18,
        color: '#cccccc',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        borderTopColor: '#50576d',
        borderTopWidth: 0.4,
    },
    settingButton: {
        flex: 0.5,
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
    },
    buttonInView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonIcon: {
        width: 0.04*width,
        height: 0.04*width,
        justifyContent: 'center',
        marginRight: 8,
    },
    buttonText: {
        color: '#9ea2ae',
        fontSize: 16,
        fontWeight: 'bold',
    },
})