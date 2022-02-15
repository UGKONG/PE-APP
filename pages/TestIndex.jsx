/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CommonStyle, { color as CommonColor } from '../components/Common.js';
import Test from './Test.jsx';

const Stack = createNativeStackNavigator();

export default function () {
  const [testBtnList, setTestBtnList] = useState([
    { id: 1, name: '밸런스 기질 검사', navigate: 'Test1' },
    { id: 2, name: '밸런스 감각 검사', navigate: 'Test2' },
    { id: 3, name: '유아 정서 지능 검사', navigate: 'Test3' },
    { id: 4, name: '유아 식습관 검사', navigate: 'Test4' },
    { id: 5, name: '양육 태도 검사', navigate: 'Test5' },
  ]);

  const headerStyle = (title = '') => {
    const style = {
      title: title,
      headerStyle: { backgroundColor: CommonColor.background },
      headerTintColor: CommonColor.active,
    }
    return {...style};
  }

  const TestIndex = ({ navigation }) => (
    <ScrollView style={CommonStyle.container}>
      {
        testBtnList.map((item) => (
          <TouchableOpacity key={item.id}
            style={[CommonStyle.button, { marginBottom: 10 }]}
            onPress={() => navigation.navigate(item.navigate)}
          >
            <Text style={CommonStyle.buttonText}>{ item.name }</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )

  return (
    <Stack.Navigator>
      <Stack.Screen name='_TestIndex' component={TestIndex} options={{ headerShown: false }} />
      <Stack.Screen name='Test1' component={Test} options={headerStyle('밸런스 기질 검사')} />
      <Stack.Screen name='Test2' component={Test} options={headerStyle('밸런스 감각 검사')} />
      <Stack.Screen name='Test3' component={Test} options={headerStyle('유아 정서 지능 검사')} />
      <Stack.Screen name='Test4' component={Test} options={headerStyle('유아 식습관 검사')} />
      <Stack.Screen name='Test5' component={Test} options={headerStyle('양육 태도 검사')} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  
})