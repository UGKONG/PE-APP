/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import commonStyle, { text as CommonText } from '../components/common.js';
import { Ionicons } from '@expo/vector-icons';

export default function ({ route, navigation }) {
  const { id, name } = route.params;

  return (
    <>
      <View style={commonStyle.h1}>
        <TouchableOpacity style={commonStyle.backButton} onPress={() => navigation.goBack()}>
          <Ionicons style={commonStyle.backButtonText} name={CommonText.backIcon} size={24} />
        </TouchableOpacity>
        <Text style={commonStyle.h1Text}>{name}</Text>
      </View>
      <ScrollView style={commonStyle.container}>
        <Text>{ id }</Text>
        <Text>{ name }</Text>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  
})