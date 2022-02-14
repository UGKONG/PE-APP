/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, ScrollView } from 'react-native';
import commonStyle from '../components/Common.js';

export default function ({ navigation }) {
  const [years, setYears] = useState([
    { label: '2020년', value: 2020 },
    { label: '2021년', value: 2021 },
    { label: '2022년', value: 2022 },
  ]);

  return (
    <View style={styles.container}>
      <View style={commonStyle.h1}>
        <Text style={commonStyle.h1Text}>검사 리스트</Text>
      </View>

      <ScrollView>
        {/* Button */}
        <TouchableOpacity style={[commonStyle.button, {marginBottom: 10}]} onPress={() => navigation.navigate('Test1')}>
          <Text style={styles.buttonText}>밸런스 기질 검사</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.button, {marginBottom: 10}]} onPress={() => navigation.navigate('Test2')}>
          <Text style={styles.buttonText}>밸런스 감각 검사</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.button, {marginBottom: 10}]} onPress={() => navigation.navigate('Test3')}>
          <Text style={styles.buttonText}>유아 정서 지능 검사</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.button, {marginBottom: 10}]} onPress={() => navigation.navigate('Test4')}>
          <Text style={styles.buttonText}>유아 식습관 검사</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.button, {marginBottom: 10}]} onPress={() => navigation.navigate('Test5')}>
          <Text style={styles.buttonText}>양육 태도 검사</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.button, {marginBottom: 10}]} onPress={() => navigation.navigate('Notice')}>
          <Text style={styles.buttonText}>공지사항 바로가기</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f9f8'
  },
  buttonText: {
    color: '#fff',
  }
})