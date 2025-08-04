import { Background, Button } from '@react-navigation/elements';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

const style = StyleSheet.create({

    container: {
        height: '100%',
        justifyContent:'center',
        padding: 15,
        paddingTop: 30,
        backgroundColor: '#151515',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 80,
        height: 80,
    },

    searchContainer: {
        height: 40,
        width:305,
        textAlign:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222222',
        borderRadius: 6,
    },

    searchInput: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
    },
    

    searchButton: {
        paddingTop: 5,
        paddingRight: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        padding: 30,
        gap: 20,
    },

    button: {
        height: 30,
        width: 90,
        justifyContent: 'center',
        backgroundColor: '#ec701cff',
        borderRadius: 20,
        alignItems: 'center',
    },

    buttonText: {
        color: '#ffffffff',
        fontSize: 11,
    },

    box: {
        backgroundColor: '#222222',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    User: {
        height:20,
        width: 100,
        paddingBottom: 25,
        color: '#ec701cff',
    },

    textUser:{
        color: '#ec701cff',
    },

    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#006AB9',
        marginBottom: 10,
    },

    texto: {
        fontSize: 13,
        color: '#ffffff',
        marginBottom: 10,
    },

    buttonBox: {
        color: '#f78b1fbb',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button2: {
        height: 50,
        width: 280,
        marginBottom: 10,
        justifyContent: 'center',
        color: '#ffffff',
        backgroundColor: '#',
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText1:{
    height:30,
    width: 300,
    paddingTop: 5,
    textAlign: 'center' ,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#f78b1fbb',
    backgroundColor: '#484848',
    borderRadius: 20,
    alignItems: 'center',

}
    

});
export default style;
