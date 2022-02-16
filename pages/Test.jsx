/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CommonStyle, { text as CommonText } from '../components/common.js';
import { Ionicons } from '@expo/vector-icons';

export default function ({ route, navigation }) {
  const { name } = route.params;

  return (
    <>
      <View style={CommonStyle.h1}>
        <TouchableOpacity style={CommonStyle.backButton} onPress={() => navigation.goBack()}>
          <Ionicons style={CommonStyle.backButtonText} name={CommonText.backIcon} size={24} />
        </TouchableOpacity>
        <Text style={CommonStyle.h1Text}>{name}</Text>
      </View>
      <ScrollView style={CommonStyle.container}>
        
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  
})