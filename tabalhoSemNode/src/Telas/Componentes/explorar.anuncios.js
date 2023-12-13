import { React } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from "react-native";

const width = Dimensions.get('screen').width;

export default function Anuncio({ anuncio }) {
    return (
        <View style={estilos.view}>
            {anuncio.map(({ img, desc }) => {
                return (
                    <View key={img}>
                        <TouchableOpacity>
                            <Image source={img} style={estilos.anuncio} />

                            <Text style={estilos.desc}>{desc}</Text>
                        </TouchableOpacity>
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
    },
    anuncio: {
        width: '100%',
        height: 468 / 585 * width,
        borderRadius: 5,
    },
    desc: {
        fontSize: 19,
        fontWeight: "bold",
        color: '#2f9e41',
        marginTop: 5,
        marginBottom: 20,
    },
});
