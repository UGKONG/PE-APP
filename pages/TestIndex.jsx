/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import commonStyle, { color as commonColor } from '../components/common.js';
import Test from './Test.jsx';
import { staticState } from '../modules/store.js';

const Stack = createNativeStackNavigator();

export default function () {
  const [testBtnList, setTestBtnList] = useState([]);

  const getTestItem = () => {
    axios.get(staticState.dbUrl + '/testItem')
      .then(({ data }) => {
        setTestBtnList(data);
      })
  }

  useEffect(() => {
    getTestItem();
  }, []);

  const IndexScreen = ({ navigation }) => (
    <>
      <View style={commonStyle.h1}>
        <Text style={commonStyle.h1Text}>검사 항목</Text>
      </View>
      <ScrollView style={commonStyle.container}>
        {
          testBtnList.map((item) => (
            <TouchableOpacity key={item.id}
              style={[commonStyle.button, { marginBottom: 10 }]}
              onPress={() => navigation.navigate(item.navigate, { id: item.id, name: item.name })}
            >
              <Text style={commonStyle.buttonText}>{ item.name }</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </>
  )

  const stackOption = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen name='_TestIndex' component={IndexScreen} options={stackOption} />
      <Stack.Screen name='Test1' component={Test} options={stackOption} />
      <Stack.Screen name='Test2' component={Test} options={stackOption} />
      <Stack.Screen name='Test3' component={Test} options={stackOption} />
      <Stack.Screen name='Test4' component={Test} options={stackOption} />
      <Stack.Screen name='Test5' component={Test} options={stackOption} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  
})