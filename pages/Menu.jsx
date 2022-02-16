/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CommonStyle, { text as CommonText } from '../components/Common.js';
import { Ionicons } from '@expo/vector-icons';

export default function ({ route, navigation }) {
  const [menus, setMenus] = useState([
    { id: 1, name: 'Home', navigate: 'Main' },
    { id: 2, name: '밸런스 기질 검사', navigate: 'Test1' },
    { id: 3, name: '밸런스 감각 검사', navigate: 'Test2' },
    { id: 4, name: '유아 정서 지능 검사', navigate: 'Test3' },
    { id: 5, name: '유아 식습관 검사', navigate: 'Test4' },
    { id: 6, name: '양육 태도 검사', navigate: 'Test5' },
    { id: 7, name: '공지사항', navigate: 'Notice' },
    { id: 8, name: '나의 스케줄', navigate: 'MySchedule' },
    { id: 9, name: '내정보', navigate: 'MyInfo' },
  ]);

  return (
    <>
      <View style={CommonStyle.h1}>
        <TouchableOpacity style={CommonStyle.backButton} onPress={() => navigation.goBack()}>
          <Ionicons style={CommonStyle.backButtonText} name={CommonText.backIcon} size={24} color="black" />
        </TouchableOpacity>
        <Text style={CommonStyle.h1Text}>메뉴</Text>
      </View>
      <View style={CommonStyle.container}>
        {
          menus.map(menu => (
            <View key={menu.id}>
              <Text>{menu.name}</Text>
            </View>
          ))
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  
})