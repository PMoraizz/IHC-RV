import React from 'react';

import Topo from './Componentes/home.topo.js';
import Posts from './Componentes/home.posts.js';

import { ScrollView, StyleSheet } from 'react-native';

import mock from '../mocks/componentes.js';


export default function Home() {
    return <ScrollView style={estilos.test}>
        <Topo {...mock.topo} />
        <Posts {...mock.posts} />
    </ScrollView>
}

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        // backgroundColor: '#2f9e41'
    },
    test: {
        backgroundColor: '#2f9e41'
    }
});
