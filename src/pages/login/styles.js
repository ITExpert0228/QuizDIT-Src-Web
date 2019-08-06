/**
 * Description: Login page Styles
 * Date: 1/16/2019
 */

import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

const { width, height }  = Dimensions.get('window');

export default StyleSheet.create({
    bg_container: {
        width: '100%',
        height: Platform.OS === 'web'? height : "auto",
        minHeight: Platform.OS === 'ios' ? height : height - StatusBar.currentHeight,
    },
    logo: {
        width: width,
        height: 0.22 * height,
        marginVertical: 0.075 * height,
        alignSelf: 'center'
    },
    form: {
        marginHorizontal: 0.09 * width,
    },
    item: {
        marginLeft: 0
    },
    usernameLabel: {
        color: '#757983',
    },
    passwordLabel: {
        color: '#757983',
    },
    input: {
        color: '#ffffff'
    },
    forgotButton: {
        alignSelf: 'flex-end',
        marginVertical: 12,
    },    
    forgot: {
        color: '#969997',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#969997',
        // fontStyle: 'italic'
    },
    continueButton: {
        alignSelf: 'center',
        width: '100%',
        height: 54,
        marginHorizontal: 0.1 * width,
        justifyContent: 'center',
        borderColor: '#ffffff'
    },
    continueButton_text: {
        color: '#ffffff',
    },
    facebookButton: {
        width: '100%',
        height: 0.075*height,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#3377d4',
    },
    fbIcon: {
        width: 0.04*width,
        height: 0.04*width,
        marginRight: 10,
    },
    facebookButtonTtext: {
        color: '#ffffff',
    }

})