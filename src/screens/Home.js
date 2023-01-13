import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Dummy text</Text>
      <TouchableOpacity onPress={() => navigation.navigate('BottomNavigation')}>
        <Text>Move to next Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});
