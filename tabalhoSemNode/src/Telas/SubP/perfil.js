import React from "react";
import { View, StyleSheet, ScrollView } from 'react-native';

import PerfilTopo from "../Componentes/perfil.topo";
import PerfilDado from "../Componentes/perfil.dados";

import mock from '../../mocks/componentes';

export default function Perfil(){
    return <ScrollView style={estilos.view}>
        <PerfilTopo {...mock.perfil.topo}/>
        <PerfilDado {...mock.perfil.dados}/>
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