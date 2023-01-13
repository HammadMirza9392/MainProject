import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Home from './Bottom Nav Screen/Home';
import Search from './Bottom Nav Screen/Search';
import Add from './Bottom Nav Screen/Add';
import Chat from './Bottom Nav Screen/Chat';
import Profile from './Bottom Nav Screen/Profile';

const BottomNavigation = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(2);

  return (
    <View style={{flex: 1}}>
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Add />
      ) : selectedTab === 3 ? (
        <Chat />
      ) : (
        <Profile />
      )}
      <View style={styles.btmNvgMainContainer}>
        <TouchableOpacity
          style={styles.BottomnavIconsContainer}
          onPress={() => setSelectedTab(0)}>
          <View style={styles.iconbg}>
            <Image
              source={require('./../assests/home.png')}
              style={[
                styles.iconImage,
                {tintColor: selectedTab == 0 ? '#fcfefc' : '#5a556e'},
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BottomnavIconsContainer}
          onPress={() => setSelectedTab(1)}>
          <View style={styles.iconbg}>
            <Image
              source={require('./../assests/search.png')}
              style={[
                styles.iconImage,
                {tintColor: selectedTab == 1 ? '#fcfefc' : '#5a556e'},
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BottomnavIconsContainer}
          onPress={() => setSelectedTab(2)}>
          <View style={styles.iconbg}>
            <Image
              source={require('./../assests/add.png')}
              style={[
                styles.iconImage,
                {tintColor: selectedTab == 2 ? '#fcfefc' : '#5a556e'},
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BottomnavIconsContainer}
          onPress={() => setSelectedTab(3)}>
          <View style={styles.iconbg}>
            <Image
              source={require('./../assests/chat.png')}
              style={[
                styles.iconImage,
                {tintColor: selectedTab == 3 ? '#fcfefc' : '#5a556e'},
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BottomnavIconsContainer}
          onPress={() => setSelectedTab(4)}>
          <View style={styles.iconbg}>
            <Image
              source={require('./../assests/profile.png')}
              style={[
                styles.iconImage,
                {tintColor: selectedTab == 4 ? '#fcfefc' : '#5a556e'},
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  btmNvgMainContainer: {
    position: 'absolute',
    height: 70,
    bottom: 0,
    backgroundColor: '#1e1a2c',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  //   iconbg: {
  //     height: 50,
  //     width: 50,
  //     backgroundColor: '#f2f2f2',
  //     borderRadius: 5,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  BottomnavIconsContainer: {},
  iconImage: {
    height: 30,
    width: 30,
  },
});
