/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CommonStyle from '../components/Common.js';
import { Ionicons } from '@expo/vector-icons';

export default function ({ route, navigation }) {
  const { name } = route.params;

  return (
    <>
      <View style={CommonStyle.h1}>
        <TouchableOpacity style={CommonStyle.backButton} onPress={() => navigation.goBack()}>
          <Ionicons style={{ color: '#ffffff80' }} name="ios-chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={CommonStyle.h1Text}>{name}</Text>
      </View>
      <View style={CommonStyle.container}>
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  
})