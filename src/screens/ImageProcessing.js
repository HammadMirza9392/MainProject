import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, {useState} from 'react';

const ImageProcessing = () => {
  const [imageData, setImageData] = useState(null);

  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    setImageData(result);
    console.log(result);
  };

  const requestPremission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Social Media App',
          message:
            'app need to access your cemra so that you can upload pictures',

          buttonPositive: 'ok',
          buttonNegative: 'cancel',
        },
      );
      console.log(granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera();
      } else {
        console.log('access denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    try {
      const reference = storage().ref(imageData.assets[0].fileName);
      const pathToFile = imageData.assets[0].uri;
      // uploads file
      await reference.putFile(pathToFile);
      const url = await storage()
        .ref(imageData.assets[0].fileName)
        .getDownloadURL();
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainContainer}>
      {imageData !== null ? (
        <Image
          source={{uri: imageData.assets[0].uri}}
          style={styles.homeImage}
        />
      ) : null}
      <TouchableOpacity
        onPress={() => requestPremission()}
        style={styles.homeButton}>
        <Text style={styles.btnText}>CApture Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => uploadImage()} style={styles.homeButton}>
        <Text style={styles.btnText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageProcessing;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  homeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  homeButton: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  btnText: {
    textAlign: 'center',
  },
});
