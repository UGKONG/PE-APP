/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import CommonStyle, { text as CommonText } from '../components/Common.js';

export default function ({ navigation }) {
  return (
    <>
      <View style={CommonStyle.h1}>
          <Image 
            style={styles.logo} 
            source={require('../assets/logo-w.png')} 
          />
      </View>
      <ScrollView style={CommonStyle.container}>

      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 33,
    marginRight: 'auto',
    marginLeft: 'auto',
    transform: [{ translateX: -4 }, { translateY: -2 }]
  }
})