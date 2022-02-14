/* eslint-disable import/no-anonymous-default-export */
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from "./pages/Main.jsx";
import Notice from "./pages/Notice.jsx";
import Test from "./pages/Test.jsx";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function({ navigation }) {

  const headerStyle = (title = '') => {
    const style = {
      title: title,
      headerStyle: { backgroundColor: '#00ada9' },
      headerTintColor: '#fff',
    }
    return {...style};
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={headerStyle('HOME')} />
        <Stack.Screen name="Test1" component={Test} options={headerStyle('밸런스 기질 검사')} />
        <Stack.Screen name="Test2" component={Test} options={headerStyle('밸런스 감각 검사')} />
        <Stack.Screen name="Test3" component={Test} options={headerStyle('유아 정서 지능 검사')} />
        <Stack.Screen name="Test4" component={Test} options={headerStyle('유아 식습관 검사')} />
        <Stack.Screen name="Test5" component={Test} options={headerStyle('양육 태도 검사')} />
        <Stack.Screen name="Notice" component={Notice} options={headerStyle('Notice')} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name='Main' component={Main} options={{ title: '메인' }} />
        <Tab.Screen name='Test' component={Test} options={{ title: '검사' }} />
        <Tab.Screen name='Notice' component={Notice} options={{ title: '공지' }} />
        <Tab.Screen name='Info' component={Notice} options={{ title: '내정보' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}