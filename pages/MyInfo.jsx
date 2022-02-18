/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import commonStyle from '../components/common.js';

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    axios.get('http://192.168.0.59:8888/user').then(({ data }) => {
      setUsers(data);
    });
  }
  const postUser = () => {
    let i = users.length + 1;
    let data = {
      id: i, name: `홍길동${i}`, phone: `010-${i}${i}${i}${i}-${i}${i}${i}${i}`, 
      birth: `00000000`, gender: `M`, userId: `test${i}`, userPw: `test${i}`
    };
    axios.post('http://192.168.0.59:8888/user', data).then(() => {
      getUser();
    })
  }

  useEffect(() => {
    getUser();
  }, []);

  const IndexScreen = ({ navigation }) => (
    <>
      <View style={commonStyle.h1}>
        <Text style={commonStyle.h1Text}>내정보</Text>
      </View>
      <ScrollView style={commonStyle.container}>
        {
          users.map(user => (
            <Text key={user.id}>id: {user.id} / name: {user.name}</Text>
          ))  
        }
        <Button title='POST_TEST' onPress={postUser} />
        <Button title='DELETE_TEST' onPress={() => {
          axios.delete('http://192.168.0.59:8888/user').then(() => {
            getUser();
          })
        }} />
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