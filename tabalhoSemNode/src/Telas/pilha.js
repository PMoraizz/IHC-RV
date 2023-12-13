import React from 'react';
import Home from './home.js';
import Perfil from './SubP/perfil.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

export default function Pilha() {
    return <Tab.Navigator screenOptions={{ }}>
        <Tab.Screen name="index" component={Home} />
        <Tab.Screen name="Tela 2" component={Perfil} />
    </Tab.Navigator>
}
