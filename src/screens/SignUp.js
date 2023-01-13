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

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const singup = () => {
    firestore()
      .collection('Users')
      .add({
        name: userName,
        email: email,
        password: password,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <Background>
      <Text style={styles.SignupText}>Sign up Screen</Text>
      <View style={styles.formContainer}>
        <Text style={styles.inptLabel}>User Name</Text>
        <TextInput
          onChangeText={text => setUserName(text)}
          style={styles.inptFields}
        />

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

        <TouchableOpacity style={styles.btnSubmit} onPress={() => singup()}>
          <Text style={styles.btnText}>Sing in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Go to Login Page.!</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default SignUp;

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
