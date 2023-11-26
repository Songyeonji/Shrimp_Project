import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const ParkingCheckScreen = () => {
  // 가상의 현재 주소, 시간, 키로수 값
  const currentAddress = '대전시 유성구';
  const currentTime = '2023-11-22 15:30';
  const currentDistance = '5 km';

  const reloadMap = () => {
    // TODO: 지도 리로드 로직 추가
    console.log('Map Reloaded!');
  };

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
        {/* Shrimp 이미지 표시 - 현재 자기 위치를 표시하는 아이콘*/}
        <Marker coordinate={{ latitude: 36.3504, longitude: 127.3945 }}>
          {/* shrimp.png의 경로를 실제 파일 경로로 바꿔야 합니다. */}
          <Image source={require('../assets/shrimp.png')} style={{ width: 40, height: 40 }} />
        </Marker>
      </MapView>

 

      {/* 주정차 관련 버튼들 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="ban" type="font-awesome" size={24} color="white" />
          <Text style={styles.buttonText}>주정차 금지구역</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="dollar" type="font-awesome" size={24} color="white" />
          <Text style={styles.buttonText}>유료주차장</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="dollar-sign" type="font-awesome" size={24} color="white" />
          <Text style={styles.buttonText}>무료주차장</Text>
        </TouchableOpacity>
      </View>

      {/* 지도 리로드 버튼 */}
      <TouchableOpacity style={styles.reloadButton} onPress={reloadMap}>
        <Icon name="refresh" type="font-awesome" size={24} color="white" />
      </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    backgroundColor: '#2E8B57', // Dark Olive Green
    paddingVertical: 10,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '30%',
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
  reloadButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#2E8B57', // Dark Olive Green
    borderRadius: 8,
    padding: 10,
  },
});

export default ParkingCheckScreen;
