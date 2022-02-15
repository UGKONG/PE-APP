/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CommonStyle from '../components/Common.js';

export default function ({ navigation }) {
  return (
    <View style={CommonStyle.container}>
      <View style={CommonStyle.h1}>
        <Text style={CommonStyle.h1Text}>공지사항</Text>
      </View>
      <View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
})