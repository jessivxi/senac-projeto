import React from 'react';
import style from './homeStyles';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Index() {
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
                            <Text style={style.searchButtonText}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="#ec701cff" class="bi bi-search" viewBox="0 0 16 2 16" >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.content}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>Idéias de P.I</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}> NOVIDADES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>De sua opinião</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.box}>
                    <TouchableOpacity style={style.User}>
                        <Text style={style.textUser}> User_Aluno T.I</Text>
                    </TouchableOpacity>
                    <Text style={style.titulo}>Preciso de uma ideia de P.I para o meu projeto intregador </Text>
                    <Text style={style.texto}>Oi, pessoal! Estou um pouco perdido(a) e queria pedir ajuda de vocês. Preciso desenvolver um Projeto Integrador (P.I.) e estou travado(a) na parte da ideia principal....</Text>
                    <TouchableOpacity style={style.button2}>
                        <Text style={style.buttonText1}> Ler mais</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.box}>
                    <TouchableOpacity style={style.User}>
                        <Text style={style.textUser}> User_Aluno T.I</Text>
                    </TouchableOpacity>
                    <Text style={style.titulo}>Preciso de uma ideia de P.I para o meu projeto intregador </Text>
                    <Text style={style.texto}>Oi, pessoal! Estou um pouco perdido(a) e queria pedir ajuda de vocês. Preciso desenvolver um Projeto Integrador (P.I.) e estou travado(a) na parte da ideia principal....</Text>
                    <TouchableOpacity style={style.button2}>
                        <Text style={style.buttonText1}> Ler mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}