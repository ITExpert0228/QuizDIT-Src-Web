import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

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
    backIcon: {
        flex: 0.05,
        width: 0.04*width,
        height: 0.04*width,
        alignSelf: 'flex-end',
        margin: 16,
    },
    property: {
        flex: 0.05,
        width: 0.04*width,
        height: 0.04*width,
        alignSelf: 'flex-end',
    },
    picDiv: {
        marginBottom: 15,
    },
    pic: {
        width: 0.25*width,
        height: 0.25*width,
        alignSelf: 'center',
        marginVertical: 0.03*width,
        position: 'absolute',
    },
    rank: {
        alignSelf: 'center',
        width: 0.07*width,
        height: 0.07*width,
        marginLeft: 0.15*width,
        marginTop: 0.21*width,
    },
    fieldName: {
        fontSize: 36,
        color: '#ffffff',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    fieldMail: {
        fontSize: 14,
        color: '#969997',
        alignSelf: 'center',
        marginBottom: 30,
    },
    acheiveBox: {
        // marginVertical: 0,
    },
    cardflex: {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginTop: 3,
    },
    acheive: {
        width: 0.2*width,
        height: 0.2*width,
        flex: 0.33,
        margin: 10,
    },

})