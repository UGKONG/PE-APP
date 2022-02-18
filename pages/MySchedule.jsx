/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import commonStyle, { text as CommonText } from '../components/common.js';

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {

  const IndexScreen = ({ navigation }) => (
    <>
      <View style={commonStyle.h1}>
        <Text style={commonStyle.h1Text}>나의 스케줄</Text>
      </View>
      <ScrollView style={commonStyle.container}>
        <Text>나의 스케줄</Text>
      </ScrollView>
    </>
  )
  
  const stackOption = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name='_MySchedule' component={IndexScreen} options={stackOption} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  
})