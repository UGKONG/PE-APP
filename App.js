/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { AntDesign } from '@expo/vector-icons'; // https://icons.expo.fyi/
import { color as CommonColor } from './components/Common.js';

import Main from "./pages/Main.jsx";
import TestIndex from "./pages/TestIndex.jsx";
import Notice from "./pages/Notice.jsx";
import MySchedule from "./pages/MySchedule.jsx";
import MyInfo from "./pages/MyInfo.jsx";

const Tab = createBottomTabNavigator();
const statusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

export default function (props) {
  // const globalState = useSelector(state => state);

  // useEffect(() => {
  //   console.log(globalState);
  // });

  const tabIconControl = route => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = '';
      switch (route.name) {
        case 'Main': iconName = 'home'; break;
        case 'TestIndex': iconName = 'copy1'; break;
        case 'Notice': iconName = 'bells'; break;
        case 'MySchedule': iconName = 'calendar'; break;
        case 'MyInfo': iconName = 'user'; break;
        default: iconName = ''; break;
      }
      return <AntDesign name={iconName} size={24} color={focused ? CommonColor.active : 'gray'} />
    },
    tabBarActiveTintColor: CommonColor.active,
    tabBarInactiveTintColor: 'gray',
  });

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <View style={styles.statusBar} />
        <Tab.Navigator screenOptions={({ route }) => tabIconControl(route)}>
          <Tab.Screen name='Main' component={Main} options={{ title: 'Home', headerShown: false }} />
          <Tab.Screen name='TestIndex' component={TestIndex} options={{ title: '검사지', headerShown: false }} />
          <Tab.Screen name='Notice' component={Notice} options={{ title: '공지사항', tabBarBadge: 3, headerShown: false }} />
          <Tab.Screen name='MySchedule' component={MySchedule} options={{ title: '나의 스케줄', headerShown: false }} />
          <Tab.Screen name='MyInfo' component={MyInfo} options={{ title: '내정보', headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: { 
    height: statusBarHeight, 
    backgroundColor: CommonColor.statusBarColor 
  }
})