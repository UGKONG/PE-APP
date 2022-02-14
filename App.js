import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./pages/Main.jsx";
import Notice from "./pages/Notice.jsx";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function() {

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
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={Main} options={headerStyle('Balance Play')} />
        <Drawer.Screen name="Notice" component={Notice} options={headerStyle('Notice')} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}