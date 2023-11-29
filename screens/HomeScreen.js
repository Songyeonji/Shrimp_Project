import React, { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image  } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button as RNEButton, Text, Icon } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const startNavigation = () => {
    navigation.navigate('Test', {
      origin,
      destination,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* 지도 표시 */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.3504,
          longitude: 127.3845,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* 출발지와 도착지에 마커 추가 */}
        {origin && <Marker coordinate={{ latitude: 36.3504, longitude: 127.3845 }} title="출발지" />}
        {destination && <Marker coordinate={{ latitude: 36.3504, longitude: 127.3745 }} title="도착지" />}
        {/* Shrimp 이미지 표시 - 현재 자기 위치를 표시하는 아이콘*/}
        <Marker coordinate={{ latitude: 36.3504, longitude: 127.3945 }}>
          <Image source={require('../assets/shrimp.png')} style={{ width: 40, height: 40 }} />
        </Marker>
      </MapView>


      {/* 출발지, 도착지 입력창과 버튼 */}
        <View style={styles.inputContainer}>
          {/* 주정차 금지구역, 유료주차장, 무료주차장 버튼 */}
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

        <TextInput
          style={styles.input}
          placeholder="출발지"
          value={origin}
          onChangeText={(text) => setOrigin(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="도착지"
          value={destination}
          onChangeText={(text) => setDestination(text)}
        />
        {/* 길찾기 시작 버튼 */}
         <TouchableOpacity
          style={styles.routeButton}
          onPress={startNavigation}
        >
          <Text style={styles.routeButtonText}>길찾기 시작</Text>
          <Icon name="directions" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#B0C4DE',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: '80%',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#800080',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '30%',
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
  routeButton: {
    backgroundColor: '#800080',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  routeButtonText: {
    color: 'white',
    marginRight: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
