/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import CommonStyle, { text as CommonText } from '../components/Common.js';
import { Ionicons } from '@expo/vector-icons';
import Menu from './Menu.jsx';

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {

  const IndexScreen = ({ navigation }) => (
    <>
      <View style={CommonStyle.h1}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Ionicons style={CommonStyle.backButtonText} name={CommonText.menuIcon} size={28} />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../assets/logo-w.png')}
        />
      </View>
      <ScrollView style={CommonStyle.container}>
        <Text>메인페이지</Text>
      </ScrollView>
    </>
  );

  const stackOption = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name='_Main' component={IndexScreen} options={stackOption} />
      <Stack.Screen name='Menu' component={Menu} options={stackOption} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 33,
    marginRight: 'auto',
    marginLeft: 'auto',
    transform: [{ translateX: -20 }, { translateY: -2 }]
  }
})