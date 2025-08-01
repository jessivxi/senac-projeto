import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    innerContainer: ViewStyle;
    logo: ImageStyle;
    title: TextStyle;
    input: TextStyle;
    label: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
    forgotPassword: ViewStyle;
    forgotPasswordText: TextStyle;
    errorText: TextStyle;
}

const loginStyles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: '#151515',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    logo: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
        marginBottom: 0,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    label: {
        fontSize: 16,
        color: '#F78B1F',
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        height: 50,
        backgroundColor: '#222222', 
        borderRadius: 6,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        height: 50,
        backgroundColor: '#222222',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#f78b1fbb',
        fontSize: 18,

        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 20,
        alignSelf: 'center',
    },
    forgotPasswordText: {
        color: '#f78b1fbb',
        fontSize: 14,
    },
    errorText: {
        color: '#006AB9',
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default loginStyles;