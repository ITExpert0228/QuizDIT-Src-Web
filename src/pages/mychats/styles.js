import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const { width, height }  = Dimensions.get('window');

export default StyleSheet.create({
    bg_container: {
        // width: '100%',
        // height: 0.875*height,
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
        marginLeft: 16,
    },
    headerText: {
        flex: 0.95,
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
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
    searchContent: {
        height: 0.07*height,
        alignItems: 'center',
    },
    searchBar: {
        backgroundColor: '#31353e',
        borderWidth: 0,
        margin: 0,
        marginTop: 10,
        width: 0.9*width,
        height: 0.05*height,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0,
    },
    searchIcon: {
        width:0.04*width,
        height:0.04*width,
        alignSelf: 'center',
        marginLeft: 80,
        marginRight: 0,
    },
    searchInput: {
        marginLeft: 0,
    },
    card: {
        margin: 0,
        marginLeft: 0,
        height: 0.75*height,
        alignItems: 'center',
        borderColor: '#585c67',
        backgroundColor: '#3b404d',
    },
    CardItem: {
        width: width,
        paddingLeft: 0,
        paddingRight:0,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: '#3b404d',
        flexDirection: 'row',
        height: 0.15*height,
        borderColor: '#585c67',
        borderWidth: 0.25,
    },
    CardItemImg: {
        width: 0.15*height,
        height: 0.15*height,
    },
    name: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 3,
        marginLeft: 16,
    },
    chatmsg: {
        marginVertical: 3,
        marginLeft: 16,
        color: '#767982',
    },
    time: {
        marginVertical: 3,
        marginLeft: 16,
        color: '#545963',
    },
    iconView: {
        flex: 0.05,
        flexDirection: 'row',
    },
    moreIcon: {
        width: 0.02*width,
        height: 0.02*width,
        flex: 0.5,
        right: 0,
    },
    footer: {
        height: 0.09*height,
        alignItems: 'center',
    },
    footer_bg: {
        width: width,
        alignItems: 'center',
        height: 0.09*height,
    },
    imgBgView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    msgbutton: {
        margin: 5,
        width: 0.05*width,
    },
    facebookButtonTtext: {
        fontSize: 16,
        color: '#ffffff',
    },

})