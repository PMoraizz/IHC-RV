import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function PerfilTopo({user, newPost, config}){
    return <>
        <View style={estilos.linha}>
            <Text style={estilos.user}>{user}</Text>
            <Image style={estilos.icons} source={newPost}/>
            <Image style={estilos.icons} source={config}/>
        </View>    
    </>    
}

const estilos = StyleSheet.create({
    linha: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        marginTop: 5,
        padding: 5,
    },
    user: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#2f9e41',
        marginRight: 'auto',
    },
    icons:{
        marginHorizontal: 5,
    }

});