// screens/ParkingCheckScreen.js (수정)
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ParkingProhibitedScreen from './ParkingProhibitedScreen';
import PaidParkingScreen from './PaidParkingScreen';
import FreeParkingScreen from './FreeParkingScreen';

const ParkingCheckTab = createMaterialTopTabNavigator();

const ParkingCheckScreen = () => {
  return (
    <ParkingCheckTab.Navigator>
      <ParkingCheckTab.Screen name="주정차금지구역" component={ParkingProhibitedScreen} />
      <ParkingCheckTab.Screen name="유료주차장" component={PaidParkingScreen} />
      <ParkingCheckTab.Screen name="무료주차장" component={FreeParkingScreen} />
    </ParkingCheckTab.Navigator>
  );
};

export default ParkingCheckScreen;