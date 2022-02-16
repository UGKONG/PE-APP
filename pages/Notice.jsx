/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
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
        <Text style={CommonStyle.h1Text}>공지 사항</Text>
      </View>
      <View style={CommonStyle.container}>
        <Text>공지사항 페이지입니다.</Text>
      </View>
    </>
  );

  const stackOption = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name='_Notice' component={IndexScreen} options={stackOption} />
      <Stack.Screen name='Menu' component={Menu} options={stackOption} />
    </Stack.Navigator>
  )
}