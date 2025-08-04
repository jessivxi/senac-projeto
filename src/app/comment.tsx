import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './commentStyle';

export default function PostDetails() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
            />

            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder=""
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity style={styles.searchButton}>
                        <Ionicons name="search-outline" size={22} color="#ec701c" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Voltar */}
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>◀ Voltar</Text>
                </TouchableOpacity>

                {/* Post */}
                <View style={styles.postHeader}>
                    <View style={styles.userContainer}>
                        <Ionicons name="person-outline" size={14} color="#ec701c" />
                        <Text style={styles.userName}>User_Aluno T.I</Text>
                    </View>
                    <Ionicons name="bookmark-outline" size={18} color="#ec701c" />
                </View>

                <Text style={[styles.postTitle, {fontFamily: 'SourceCodePro-Regular'}]}>Preciso de uma ideia de P.I para o meu projeto integrador</Text>
                <Text style={styles.postText}>
                    Oi, pessoal! Estou um pouco perdido(a) e queria pedir ajuda de vocês. Preciso desenvolver um Projeto Integrador (P.I.) e estou travado(a) na parte da ideia principal. Alguém já fez algo parecido ou tem sugestões criativas?
                </Text>

                <Text style={styles.bulletTitle}>O Que Preciso?</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>• Um tema inovador e relevante (de preferência ligado à tecnologia ou sustentabilidade).</Text>
                    <Text style={styles.bulletItem}>• Algo que possa ser implementado dentro do prazo do curso.</Text>
                    <Text style={styles.bulletItem}>• Um projeto que tenha impacto real (mesmo que pequeno).</Text>
                </View>

                {/* Comentários */}
                <Text style={styles.commentTitle}>Comentários</Text>
                <TouchableOpacity>
                    <Text style={styles.addComment}>+ Adicione um comentário</Text>
                </TouchableOpacity>

                <View style={styles.commentCard}>
                    <View style={styles.userContainer}>
                        <Ionicons name="person-outline" size={14} color="#ec701c" />
                        <Text style={styles.userName}>User_Aluno T.I</Text>
                    </View>
                    <Text style={styles.commentText}>Uma ideia: 'Relatórios de Economia: Mostrando redução de custos com energia, água e resíduos.'</Text>
                </View>

                <View style={styles.commentCard}>
                    <View style={styles.userContainer}>
                        <Ionicons name="person-outline" size={14} color="#ec701c" />
                        <Text style={styles.userName}>User_Aluno Gastronomia</Text>
                    </View>
                    <Text style={styles.commentText}>Uma ideia: 'Aplicativo de Lista de Compras Inteligente.'</Text>
                </View>

                <View style={styles.commentCard}>
                    <View style={styles.userContainer}>
                        <Ionicons name="person-outline" size={14} color="#ec701c" />
                        <Text style={styles.userName}>User_Aluno Designer</Text>
                    </View>
                    <Text style={styles.commentText}>Uma ideia: 'Sistema de Agendamento para Salão de Beleza.'</Text>
                </View>

                <TouchableOpacity style={styles.moreComments}>
                    <Text style={styles.moreCommentsText}>... Mais comentários</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
