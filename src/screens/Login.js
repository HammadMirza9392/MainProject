import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Background from './Background';
import firestore from '@react-native-firebase/firestore';
import BottomNavigation from './BottomNavigation';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkLogin = () => {
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs);
        // console.log(querySnapshot.docs);
        // console.log(querySnapshot.docs.length);
        // console.log(querySnapshot.docs[0]._data.email);
        if (querySnapshot.docs.length > 0) {
          if (
            querySnapshot.docs[0]._data.email === email &&
            querySnapshot.docs[0]._data.password === password
          ) {
            navigation.navigate('Home');
          } else {
            console.log('account not found');
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Background>
      <Text style={styles.SignupText}>Login Screen</Text>
      <View style={styles.formContainer}>
        <Text style={styles.inptLabel}>Email</Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          style={styles.inptFields}
        />

        <Text style={styles.inptLabel}>Password</Text>
        <TextInput
          onChangeText={text => setPassword(text)}
          style={styles.inptFields}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => checkLogin()}>
          <Text style={styles.btnText}>Login In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SiginUp')}>
          <Text>Go to Sign up page .!</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  SignupText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginVertical: 30,
  },
  inptLabel: {
    marginHorizontal: 30,
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  inptFields: {
    width: '90%',
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  btnSubmit: {
    backgroundColor: '#000',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    padding: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
  },
  btnText: {
    color: '#ffff',
    textAlign: 'center',
    fontSize: 18,
  },
});
