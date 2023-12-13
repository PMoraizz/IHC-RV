import { React, useState } from "react";
import { ScrollView, StyleSheet,} from "react-native";

import Busca from "../Componentes/explorar.busca";
import Anuncio from "../Componentes/explorar.anuncios";

import mock from '../../mocks/componentes';

export default function Explorar() {
  return <ScrollView style={estilos.view}>
    <Busca {...mock.explorar.busca}/>
    <Anuncio {...mock.explorar}/>
  </ScrollView>
}

const estilos = StyleSheet.create({
  view: {
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
});