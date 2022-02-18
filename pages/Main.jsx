/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import commonStyle, { color as commonColor } from '../components/common.js';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { staticState } from '../modules/store.js';
import { useEffect } from 'react';
import ResultSimple from './ResultSimple.jsx';

const Stack = createNativeStackNavigator();

export default function ({ route, navigation }) {
  const [list, setList] = useState([]);
  const [dateList, setDateList] = useState([]);
  
  const getTestList = date => {
    let filter = list.filter((x) => x.date.split(" ")[0] == date);
    return filter;
  }
  const getList = () => {
    axios.get(staticState.dbUrl + '/myTestList').then(({data}) => {
      let _dateList = [];
      setList(data);

      data.forEach(item => {
        let date = item.date.split(" ")[0];
        _dateList.indexOf(date) == -1 && _dateList.push(date);
      });
      setDateList(_dateList);
    });
  }

  useEffect(() => getList(), []);

  const TestList = ({ item, idx }) => (
    <Text key={idx} style={styles.testList}>{item.testName}</Text>
  );
  const DateList = ({ item, idx }) => (
    <TouchableOpacity key={idx} style={styles.list} 
      onPress={() => navigation.navigate('ResultSimple', { date: item })}
    >
      <Text style={styles.dateText}>{item}</Text>
      {getTestList(item).map((item, idx) => <TestList item={item} idx={idx} key={idx} />)}
    </TouchableOpacity>
  );
  const IndexScreen = () => (
    <>
      <View style={commonStyle.h1}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-w.png')}
        />
      </View>
      <View style={styles.title}>
        <Ionicons name="document-text-outline" size={22} style={{color: commonColor.active}}/>
        <Text style={styles.titleText}>검사 리스트</Text>
      </View>
      <ScrollView style={commonStyle.container}>
        {dateList.map((item, idx) => <DateList item={item} idx={idx} key={idx} />)}
      </ScrollView>
    </>
  );

  const stackOption = { headerShown: false };
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name='_Main' component={IndexScreen} options={stackOption} />
        <Stack.Screen name='ResultSimple' component={ResultSimple} options={stackOption} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 33,
    marginRight: 'auto',
    marginLeft: 'auto',
    transform: [{ translateX: -20 }, { translateY: -2 }]
  },
  title: {
    backgroundColor: commonColor.background,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  titleText: {
    color: commonColor.active,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 5,
  },
  list: {
    padding: 6,
    marginBottom: 6,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: commonColor.main,
  },
  testList: {
    fontSize: 12,
    color: '#555'
  }
})