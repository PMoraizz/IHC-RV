import React from 'react';
import { StatusBar, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './src/Telas/home';
import Pilha from './src/Telas/pilha';
import Explorar from './src/Telas/SubP/explorar';
import Perfil from './src/Telas/SubP/perfil';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={estilos.test}>
      <StatusBar />
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={Pilha}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/icons/home.png")} />)
          }}
        />
        <Tab.Screen
          name='Explorar'
          component={Explorar}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/icons/lupa.png")} />)
          }}
        />
        <Tab.Screen
          name='Perfil'
          component={Perfil}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/icons/perfil.png")} />)
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({

});
