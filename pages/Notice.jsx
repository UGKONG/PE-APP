/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, Text } from 'react-native';
import CommonStyle from '../components/Common.js';

export default function ({ navigation }) {
  return (
    <>
      <View style={CommonStyle.h1}>
        <Text style={CommonStyle.h1Text}>공지 사항</Text>
      </View>
      <View style={CommonStyle.container}>
        
      </View>
    </>
  )
}