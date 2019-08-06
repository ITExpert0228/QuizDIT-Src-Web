import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

const { width, height }  = Dimensions.get('window');

export default StyleSheet.create({
    bg_container: {
        width: '100%',
        // height: 0.915*height,
        minHeight: Platform.OS === 'ios' ? height : height - StatusBar.currentHeight,
        alignItems: 'center',
    },
    header: {
        height: 0.05*height,
        alignItems: 'center',
        flexDirection: 'row',
    },
    backIcon: {
        width: 0.04*width,
        height: 0.04*width,
        marginVertical: 5,
        marginLeft: 16,
    },
    propertyICon: {
        width: 0.04*width,
        height: 0.04*width,
        marginVertical: 5,
        // marginLeft: 6,
        // flex: 0.05,
    },
    chatmanBox: {
        borderBottomWidth: 1,
        borderColor: '#444444',
    },
    chatman: {
        width: 0.12*width,
        height: 0.12*width,
        alignSelf: 'center',
        marginVertical: 0.03*width,
        // position: 'absolute',
    },
    fieldName: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    fieldStatus: {
        fontSize: 12,
        color: '#969997',
        alignSelf: 'center',
        marginBottom: 10,
    },
})