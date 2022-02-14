/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import commonStyle from '../components/Common.js';

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={commonStyle.h1}>
        <Text style={commonStyle.h1Text}>Notice</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f9f8'
  }
})