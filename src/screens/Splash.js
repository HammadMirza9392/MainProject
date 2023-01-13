import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Background from './Background';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <Background>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          textAlign: 'center',
        }}>
        this is the dummy text
      </Text>
    </Background>
  );
};

export default Splash;

const styles = StyleSheet.create({});
