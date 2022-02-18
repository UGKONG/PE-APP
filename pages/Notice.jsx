/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import commonStyle from '../components/common.js';
import NoticeDetail from './NoticeDetail.jsx';

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {

  const [list, setList] = useState([]);
  
  useEffect(() => {
    axios.get('http://192.168.0.59:8888/notice').then(
      ({ data }) => setList(data)
    )
  }, []);

  const IndexScreen = ({ navigation }) => (
    <>
      <View style={commonStyle.h1}>
        <Text style={commonStyle.h1Text}>공지 사항</Text>
      </View>
      <ScrollView style={commonStyle.container}>
        {
          list.map(item => (
            <TouchableOpacity key={item.id} style={[commonStyle.button, { marginBottom: 10 }]} onPress={() => {
              navigation.navigate('NoticeDetail', {id: item.id})
            }}>
              <Text style={commonStyle.buttonText}>{item.title}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </>
  );

  const stackOption = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name='_Notice' component={IndexScreen} options={stackOption} />
      <Stack.Screen name='NoticeDetail' component={NoticeDetail} options={stackOption} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  }
})