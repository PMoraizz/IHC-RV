import { React } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

export default function Busca({ lupa }) {
    return (
        <View style={estilos.linha}>
            <Image source={lupa} style={estilos.lupa} />
            <TextInput
                placeholder="Pesquisar"
                placeholderTextColor={'#2f9e41'}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    linha: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 5,
        padding: 5,
        backgroundColor: '#CFCFCF',
        borderRadius: 20
    },
    lupa: {
        marginRight: 10,
    },
});
