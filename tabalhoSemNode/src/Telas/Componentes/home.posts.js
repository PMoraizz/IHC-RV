import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const width = Dimensions.get('screen').width;

export default function Posts({post}){
    return(
        <View style={estilos.view}>
            {post.map(({perfil, nome, postU, follow, balao, aviao}) => {
                return(
                    <View key={perfil} style={estilos.coluna}>
                        <View style={estilos.linha}>
                            <Image source={perfil} style={estilos.perfil}/>
                            <TouchableOpacity>
                                <Text style={estilos.nome}>{nome}</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={postU} style={estilos.post}/>
                        <View style={estilos.linha}>
                            <Image source={follow} style={estilos.barra}/>
                            <Image source={balao} style={estilos.barra}/>
                            <Image source={aviao} style={estilos.barra}/>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const estilos = StyleSheet.create({
    view: {
        marginHorizontal: 5,
        marginVertical: 5,
        paddingVertical: 5,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    linha: {
        flexDirection: "row",
        alignItems:"center",
        marginVertical: 5,
        marginHorizontal: 5,
    },
    coluna: {
        flexDirection: "col",
    },
    perfil: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    nome: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#2f9e41",
        marginLeft: 5,
    },
    post:{
        width: '95%',
        height: 468/585 * width,
        borderRadius: 10,
        marginHorizontal: '2.5%' 
    },
    barra:{
        marginHorizontal: 5,
        marginVertical: 5,
    }


})