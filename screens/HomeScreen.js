// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = ({ navigation }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const startNavigation = () => {
    navigation.navigate('Map', {
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
          latitude: 36.3504, // 대전의 위도
          longitude: 127.3845, // 대전의 경도
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* 출발지와 도착지에 마커 추가 */}
        {origin && <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="출발지" />}
        {destination && <Marker coordinate={{ latitude: 37.79825, longitude: -122.4424 }} title="도착지" />}
      </MapView>
      {/* 출발지, 도착지 입력창과 버튼 */}
      <View style={styles.inputContainer}>
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
      </View>
      {/* 길찾기 시작 버튼 */}
      <View style={styles.buttonContainer}>
        <Button
          title="길찾기 시작"
          color="white"
          onPress={startNavigation}
        />
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
    flexDirection: 'column', // 세로로 나열
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: '80%',
  },
  buttonContainer: {
    width: '50%',
    marginTop: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
});

export default HomeScreen;
