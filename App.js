// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import Test from './screens/Test';
import ParkingCheckScreen from './screens/ParkingCheckScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="ParkingCheck" component={ParkingCheckScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
