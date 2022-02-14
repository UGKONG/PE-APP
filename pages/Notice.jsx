import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function () {
  return (
    <View style={styles.container}>
      <Text>Notice</Text>
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