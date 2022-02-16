/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CommonStyle, { text as CommonText } from '../components/common.js';

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {

  const IndexScreen = ({ navigation }) => (
    <>
      <View style={CommonStyle.h1}>
        <Text style={CommonStyle.h1Text}>내정보</Text>
      </View>
      <ScrollView style={CommonStyle.container}>
        <Text>내정보</Text>
      </ScrollView>
    </>
  )
  
  const stackOption = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name='_MyInfo' component={IndexScreen} options={stackOption} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  
})