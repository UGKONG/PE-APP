/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CommonStyle, { text as CommonText } from '../components/Common.js';
import Menu from './Menu.jsx';

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {

  const IndexScreen = ({ navigation }) => (
    <>
      <View style={CommonStyle.h1}>
        <TouchableOpacity style={CommonStyle.backButton} onPress={() => navigation.navigate('Menu')}>
          <Ionicons style={CommonStyle.backButtonText} name={CommonText.menuIcon} size={28} />
        </TouchableOpacity>
        <Text style={CommonStyle.h1Text}>내정보</Text>
      </View>
      <View style={CommonStyle.container}>
        
      </View>
    </>
  )
  
  const stackOption = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name='_MyInfo' component={IndexScreen} options={stackOption} />
      <Stack.Screen name='Menu' component={Menu} options={stackOption} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  
})