import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../assests/css/styles';

function SignUpScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>Taskque</Text>
      </View>
      <Text style={styles.loginText}>Create your account</Text>
      <View style={styles.inputContainer}>
        <View style={styles.username}>
          <TextInput placeholder="Username" style={{padding: 15}} autoFocus />
        </View>
        <View style={{...styles.password, marginBottom: 10}}>
          <TextInput placeholder=" Password" style={{padding: 15}} />
        </View>
        <View style={styles.password}>
          <TextInput placeholder="Confirm Password" style={{padding: 15}} />
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={{color: 'white', fontWeight: '300', fontSize: 24}}>
            Sign up
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
          --Or sign up with--
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
    </View>
  );
}

export default SignUpScreen;
