import { Button } from '@react-navigation/elements';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

const style = StyleSheet.create({

    container:{
        height: '100%',
        paddingTop: 50,
        backgroundColor: '#151515',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 20,
    },

    logo: {
        width: 80,
        height: 80,
    },

    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222222',
        borderRadius: 6,
        marginLeft: 10,
    },

    searchInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        color: '#fff',
    },

    searchButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        padding: 30,
        gap: 20,

    },
    button: {
        height: 30,
        width: 100,
        marginBottom: 10,
        justifyContent: 'center',
        backgroundColor: '#ec701cff',
        borderRadius: 20,
        alignItems: 'center',
    },

    buttonText:{
        color: '#ffffffff',
        fontSize: 13,
        fontWeight: 'bold',
    },

    box: {
        backgroundColor: '#222222',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f78b1fbb',
        marginBottom: 10,
    },
    texto: {
        fontSize: 14,
        color: '#ffffff',
        marginBottom: 10,
    },

    buttonBox: {
        color: '#f78b1fbb',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
export default style;
