/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import commonStyle from '../components/common.js';
import { staticState } from '../modules/store.js';

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    axios.get(staticState.dbUrl + '/userList').then(({ data }) => {
      setUsers(data);
    });
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