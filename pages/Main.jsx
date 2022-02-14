import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import commonStyle from '../components/common.js';

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={commonStyle.h1}>
        <Text>Main</Text>
        
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notice')}>
        <Text style={styles.buttonText}>공지사항 바로가기</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f9f8'
  },
  button: {
    padding: 8,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(33, 150, 243)',
  },
  buttonText: {
    color: '#fff',
  }
})