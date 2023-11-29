import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const TestTab = createBottomTabNavigator();

const Test = ({ route }) => {
  const navigation = useNavigation(); // navigation 객체 가져오기
//장고 불러오기
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://your-django-server/api/items/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // 일단 빈칸일 때 오류 방지를 위해 기본값 설정
  const { origin = '', destination = '' } = route?.params || {};

  // 가상의 현재 주소, 시간, 키로수 값
  const currentAddress = "대전시 유성구";
  const currentTime = "2023-11-22 15:30";
  const currentDistance = "5 km";

  return (
    <View style={styles.container}>
      
      {items.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
  

      {/* 현재 주소, 시간, 키로수 표시 부분 */}
      <View style={styles.infoContainer}>
            {/* 중간에 경로안내 중지 버튼 */}
      <TouchableOpacity style={styles.stopButton} onPress={() => navigation.navigate('ParkingCheck')}>
        <Icon name="stop-circle" type="font-awesome" size={40} color="red" />
      </TouchableOpacity>
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
  stopButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
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
});

export default Test;
