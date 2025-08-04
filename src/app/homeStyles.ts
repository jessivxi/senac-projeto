import { Background, Button } from '@react-navigation/elements';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

const style = StyleSheet.create({

    container: {
        height: '100%',
        justifyContent: 'center',
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
        width: 315,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222222',
        borderRadius: 6,
    },

    searchInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
    },


    searchButton: {
        paddingTop: 2,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },


    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding:20,
        gap: 15,
    },

    button: {
        height: 30,
        width: 95,
        paddingTop: 10,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
    },

    buttonText: {
        color: '#ffffffff',
        fontSize: 11,
        fontWeight: '500'
    },

    box: {
        backgroundColor: '#222222',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    User: {
        height: 20,
        width: 100,
        paddingBottom: 25,
    },

    textUser: {
        color: '#ec701cff',
        fontWeight: '500'
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

    userTagContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 100,

},

    tag : {
    backgroundColor: '#ec701c',
    borderRadius: 10,
    paddingHorizontal:12,
    paddingVertical: 5,
},

    tagText:{
        color: '#FFFF',
        fontSize: 11,
       fontWeight: '500'
    },

    button2: {
    height: 50,
    width: 295,
    marginBottom: 10,
    justifyContent: 'center',
    color: '#ffffff',
    backgroundColor: '#',
    borderRadius: 20,
    alignItems: 'center',
},
    buttonText1: {
    height: 30,
    width: 300,
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: '500',
    justifyContent: 'center',
    color: '#f78b1fbb',
    backgroundColor: '#484848',
    borderRadius: 20,
    alignItems: 'center',

}

    

});
export default style;
