import React, { useEffect, useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TextStyle, ViewStyle, } from 'react-native';
import styles from '../app/loginStyles';
import { Image } from 'react-native'; // Adi
import { router } from 'expo-router';



const index: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleLogin = (): void => {
        router.push('/home');
    };
33
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Image
                    source={require('../../assets/images/logo.png')} // Certifique-se de que o caminho está correto
                    style={styles.logo}
                    resizeMode="contain"
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <Text style={styles.label}>Email senac:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={(text: string) => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={(text: string) => setPassword(text)}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default index;
