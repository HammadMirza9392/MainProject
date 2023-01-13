import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const Background = ({children}) => {
  return (
    <View>
      <Image source={require('./../assests/bgImg.png')} style={styles.bgimg} />
      <View style={styles.allContent}>{children}</View>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  bgimg: {
    height: '100%',
  },
  allContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
