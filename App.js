import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Summary from './Screens/Summary';
import Catagories from './Screens/Catagories';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Catagories" component={Catagories} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  </NavigationContainer>
    
  );
}
