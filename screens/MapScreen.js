import React from 'react';
import { View, Text, StyleSheet , Image   } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

const MapTab = createBottomTabNavigator();

const MapScreen = ({ route }) => {
  // 일단 빈칸일 때 오류 방지를 위해 기본값 설정
  const { origin = '', destination = '' } = route?.params || {};

  // 가상의 현재 주소, 시간, 키로수 값
  const currentAddress = "대전시 유성구";
  const currentTime = "2023-11-22 15:30";
  const currentDistance = "5 km";

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
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
           {/* Shrimp 이미지 표시 - 현재 자기 위치를 표시하는 아이콘*/}
        <Marker coordinate={{ latitude: 36.3504, longitude: 127.3945 }}>
          <Image source={require('../assets/shrimp.png')} style={{ width: 40, height: 40 }} />
        </Marker>
      </MapView>

      {/* 현재 주소, 시간, 키로수 표시 부분 */}
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Icon name="location-pin" type="entypo" size={24} color="black" />
          <Text>{currentAddress}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="clock" type="entypo" size={24} color="black" />
          <Text>{currentTime}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="road" type="font-awesome" size={24} color="black" />
          <Text>{currentDistance}</Text>
        </View>
      </View>

      {/* 하단 탭 네비게이션
      <MapTab.Navigator>
        <MapTab.Screen name="주정차확인" component={ParkingCheckScreen} />
        {/* 다른 탭 추가 */}
      {/* </MapTab.Navigator> */} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  infoItem: {
    alignItems: 'center',
  },
});

export default MapScreen;
