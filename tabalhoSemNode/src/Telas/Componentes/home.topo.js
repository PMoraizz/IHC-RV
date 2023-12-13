import React from 'react';
import { Image, StyleSheet, View, Dimensions, Text, TouchableOpacity} from 'react-native';

import componentes from '../../mocks/componentes';

import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width;

export default function Topo({logo,nome,follow,balao},){
    const navigation = useNavigation();
    return <>
        <View style={estilos.linha}>
            <Image source={logo} style={estilos.logo} />
            <Text style={estilos.nome}>{nome}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tela 2')}>
            <Image source={follow} style={estilos.componentes} />
            </TouchableOpacity>
            
            <Image source={balao} style={estilos.componentes}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    linha:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 5,
        padding: 5,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    logo:{
        width: 1920 * 0.03,
        height: 1920 * 0.03,
        marginLeft: 5
    },
    nome: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#2f9e41",
        marginLeft: 5,
        marginRight: 'auto',
    },
    componentes:{
        marginHorizontal: 10
    }
})