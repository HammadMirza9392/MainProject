import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Add = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.postHeaderContainer}>
        <Text style={styles.PostTextHeader}>Post</Text>
        <Text style={styles.UploadTextHeader}>Upload</Text>
      </View>
      <View style={styles.postBoxContainer}></View>
      <TouchableOpacity style={styles.openCameraContainer}>
        <Image
          source={require('./../../assests/camera.png')}
          style={styles.openCameraIcon}
        />
        <Text style={styles.openCameraText}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.openCameraContainer}>
        <Image
          source={require('./../../assests/gallery.png')}
          style={styles.openCameraIcon}
        />
        <Text style={styles.openCameraText}>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  mainContainer: {},
  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 0.9,
  },
  PostTextHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5a556e',
  },
  UploadTextHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  postBoxContainer: {
    borderWidth: 2,
    borderRadius: 15,
    height: 150,
    width: '90%',
    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  openCameraContainer: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    marginVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  openCameraIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  openCameraText: {
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'black',
  },
});
