import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

export default function PerfilDado({img, publicacaoN, publicacao, seguidoresN, seguidores, seguindoN, seguindo, nome, desc}){
    return <>
        <View style={estilos.linha}>
            <View style={estilos.coluna}>
                <Image source={img} style={estilos.perfil}/>
            </View>
            <View style={estilos.coluna}>
                <Text style={estilos.num}>{publicacaoN}</Text>
                <Text style={estilos.desc}>{publicacao}</Text>
            </View>
            <View style={estilos.coluna}>
                <Text style={estilos.num}>{seguidoresN}</Text>
                <Text style={estilos.desc}>{seguidores}</Text>
            </View>
            <View style={estilos.coluna}>
                <Text style={estilos.num}>{seguindoN}</Text>
                <Text style={estilos.desc}>{seguindo}</Text>
            </View>
        </View>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descP}>{desc}</Text>
    </>
}

const estilos = StyleSheet.create({
    linha: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 5,
        marginTop: 5,
        padding: 5,
    },
    coluna:{
        flexDirection: 'col',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    perfil: {
        width: 110,
        height: 110,
        borderRadius: 100,
    },
    num:{
        fontSize: 22,
        fontWeight: "bold",
        color: '#2f9e41',
    },
    desc:{
        fontSize: 15,
        fontWeight: "bold",
        color: '#2f9e41',
    },
    nome:{
        fontSize: 17,
        marginHorizontal: 10,
        fontWeight: "bold",
        color: '#2f9e41',
        marginBottom: 5,
    },
    descP:{
        fontSize: 15,
        marginHorizontal: 10,
        color: '#2f9e41',
    },

})