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
                            placeholder="Search"
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity style={style.searchButton}>
                            <Text style={style.searchButtonText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.content}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>Botão 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>Botão 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>Botão 3</Text>
                    </TouchableOpacity>
                </View>
                <View style ={style.box}>
                    <Text style={style.titulo}>Conteúdo Adicional</Text>
                    <Text style={style.texto}>Aqui você pode adicionar mais informações ou funcionalidades.</Text>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonBox}>Botão 2</Text>
                    </TouchableOpacity>
                </View>                    
            </View>
        </View>
    );
}