import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../assests/css/styles';
import {useNavigation} from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();

  const submitHandler = () => {
    navigation.navigate('Landing');
  };

  const redirectToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>Taskque</Text>
      </View>
      <Text style={styles.loginText}>Login to your Account</Text>
      <View style={styles.inputContainer}>
        <View style={styles.username}>
          <TextInput
            placeholder="Username"
            style={{padding: 15}}
            autoFocus={true}
          />
        </View>
        <View style={styles.password}>
          <TextInput placeholder="Password" style={{padding: 15}} />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => submitHandler('Landing')}>
          <Text style={{color: 'white', fontWeight: '300', fontSize: 24}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orSignContainer}>
        <Text
          style={{
            color: '#E5E5E5',
            fontWeight: '500',
            fontSize: 18,
          }}>
          --Or sign in with--
        </Text>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.gmailLogin}>
          <Image source={require('../assests/images/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fblogin}>
          <Image source={require('../assests/images/facebook.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.noAccContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            lineHeight: 21.09,
            color: '#E5E5E5',
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => redirectToSignUp()}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              lineHeight: 21.09,
              color: '#3450A1',
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;
