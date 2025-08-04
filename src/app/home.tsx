import React from 'react';
import style from './homeStyles';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
    const comentarios = (): void => {
        router.push('/comment');
    };
    return (
        <View>
            <View style={style.container}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={style.logo}
                />
                <View style={style.header}>
                    <View style={style.searchContainer}>
                        <TextInput
                            style={style.searchInput}
                            placeholder=""
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity style={style.searchButton}>
                            <Ionicons name="search-outline" size={22} color="#ec701c" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.content}>
                    <TouchableOpacity style={style.button}>
                        <Ionicons name="bulb-outline" size={18} color="#ec701c" style={{marginRight: 5}} />
                        <Text style={style.buttonText}>Idéias de P.I</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Ionicons name="sparkles-outline" size={18} color="#ec701c" style={{marginRight: 5}} />
                        <Text style={style.buttonText}> Novidades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Ionicons name="chatbubble-ellipses-outline" size={18} color="#ec701c" style={{marginRight: 5}} />
                        <Text style={style.buttonText}>De sua opinião</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.box}>
                    <View style={style.userTagContainer}>
                        <TouchableOpacity style={style.User}>
                            <Text style={style.textUser}>User_Aluno T.I</Text>
                        </TouchableOpacity>
                        <View style={style.tag}>
                            <Text style={[style.tagText, {fontFamily: 'SourceCodePro-Regular'}]}>Idéias de P.I</Text>
                        </View>
                    </View>

                    <Text style={[style.titulo, {fontFamily: 'SourceCodePro-SemiBold'}]}>Preciso de uma ideia de P.I para o meu projeto integrador</Text>
                    <Text style={style.texto}>Oi, pessoal! Estou um pouco perdido(a) e queria pedir ajuda de vocês. Preciso desenvolver um Projeto Integrador (P.I.) e estou travado(a) na parte da ideia principal....</Text>
                    <TouchableOpacity style={style.button2}>
                        <Text style={style.buttonText1} onPress={comentarios}>Ler mais</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.box}>
                    <View style={style.userTagContainer}>
                        <TouchableOpacity style={style.User}>
                            <Text style={style.textUser}>User_Aluno T.I</Text>
                        </TouchableOpacity>
                        <View style={style.tag}>
                            <Text style={[style.tagText, {fontFamily: 'SourceCodePro-Regular'}]}>Idéias de P.I</Text>
                        </View>
                    </View>

                    <Text style={[style.titulo, {fontFamily: 'SourceCodePro-SemiBold'}]}>Preciso de uma ideia de P.I para o meu projeto integrador</Text>
                    <Text style={style.texto}>Oi, pessoal! Estou um pouco perdido(a) e queria pedir ajuda de vocês. Preciso desenvolver um Projeto Integrador (P.I.) e estou travado(a) na parte da ideia principal....</Text>
                    <TouchableOpacity style={style.button2}>
                        <Text style={style.buttonText1} onPress={comentarios}>Ler mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}