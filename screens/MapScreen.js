// screens/MapScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ParkingCheckScreen from './ParkingCheckScreen';


const MapTab = createBottomTabNavigator();

const MapScreen = ({ route }) => {
  const { origin, destination } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 36.3504, // 대전의 위도
          longitude: 127.3845, // 대전의 경도
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* 출발지와 도착지에 마커 추가 */}
        <Marker coordinate={{ latitude: 36.3504, longitude: 127.3845 }} title="출발지" />
        <Marker coordinate={{ latitude: 36.3504, longitude: 127.3745 }} title="도착지" />
      </MapView>
      <Text>출발지: {origin}</Text>
      <Text>도착지: {destination}</Text>
      {/* 여기에 현재 주소, 시간, 키로수를 표시하는 부분 추가 */}
      <MapTab.Navigator>
        <MapTab.Screen name="주정차확인" component={ParkingCheckScreen} />
        {/* 다른 탭 추가 */}
      </MapTab.Navigator>
    </View>
  );
};

export default MapScreen;
