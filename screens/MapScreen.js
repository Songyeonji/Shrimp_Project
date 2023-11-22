// screens/MapScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const { origin, destination } = route.params;

  // 여기에서는 단순히 지도만 표시하고 있습니다.
  // 실제로는 구글지도 API 등을 사용하여 좌표를 지정하고 필요한 정보를 받아올 수 있습니다.

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825, // 시작 지점의 위도
          longitude: -122.4324, // 시작 지점의 경도
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* 출발지와 도착지에 마커 추가 */}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="출발지" />
        <Marker coordinate={{ latitude: 37.79825, longitude: -122.4424 }} title="도착지" />
      </MapView>
      <Text>출발지: {origin}</Text>
      <Text>도착지: {destination}</Text>
      {/* 여기에 현재 주소, 시간, 키로수를 표시하는 부분 추가 */}
    </View>
  );
};

export default MapScreen;
