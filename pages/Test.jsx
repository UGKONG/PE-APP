/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import commonStyle from '../components/Common.js';

export default function () {
  return (
    <View style={styles.container}>
      <View style={commonStyle.h1}>
        <Text style={commonStyle.h1Text}>각종 검사 페이지</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f9f8'
  }
})