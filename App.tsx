/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function WelcomeScreen({navigation}): JSX.Element {
  useEffect(() => {
    TrackPlayer.setupPlayer();
  });

  const onPressStop = async () => {
    TrackPlayer.pause();
  };
  const onPressPlay = async () => {
    await TrackPlayer.add([
      {
        id: '1',
        url: require('./assets/cocodjambo.mp3'),
        title: 'Fluidity',
        artist: 'tobylane',
        duration: 60,
      },
    ]);

    TrackPlayer.play();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false}></StatusBar>
      <ImageBackground
        source={require('./assets/images/backgroundimage.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={{top: '43.5%'}}>
          <Text style={styles.header}>Getting Started</Text>
          <Text style={styles.subtitle}>Getting Started Getting</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('./assets/images/Vector.png')}
              style={styles.note}></Image>
            <Text style={styles.text}>Let's go</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.kekwpek}>kekwpek</Text>
        <Text style={styles.zhopa}>Best student</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  note: {
    top: 19,
    left: 140,
  },

  header: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 32,
  },

  subtitle: {
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: '2%',
    fontFamily: Platform.OS === 'android' ? 'centurygothic' : 'Century Gothic',
    fontSize: 15,
    fontWeight: 'regular',
  },

  button: {
    alignSelf: 'center',
    marginBottom: '51.5%',
    backgroundColor: '#966AEF',
    marginTop: '21%',
    height: 69,
    width: 200,
    borderRadius: 20,
  },

  buttonGoogle: {
    alignSelf: 'center',
    marginTop: '8%',
    backgroundColor: '#322251',
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  buttonFacebook: {
    alignSelf: 'center',
    // top: '15.7%',
    marginTop: 20,
    backgroundColor: '#322251',
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  buttonLogin: {
    marginTop: '10%',
    alignSelf: 'center',
    backgroundColor: '#966AEF',
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  buttonLoginText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    bottom: 20,
    fontWeight: 'bold',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
  },

  imageGoogle1: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    left: 39,
    top: 15,
  },

  GoogleLoginText: {
    position: 'relative',
    bottom: 9,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
  },

  signUpText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 18,
    fontFamily: Platform.OS === 'android' ? 'centurygothic' : 'Century Gothic',
    fontSize: 13,
  },

  text: {
    position: 'absolute',
    alignSelf: 'center',
    top: 19,
    left: 45,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
  },

  kekwpek: {
    bottom: '6%',
    position: 'absolute',
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 15,
  },
  zhopa: {
    color: '#FFFFFF',
    position: 'absolute',
    bottom: '4%',
    alignSelf: 'center',
    marginTop: 7,
    fontFamily: Platform.OS === 'android' ? 'centurygothic' : 'Century Gothic',
    fontSize: 10,
  },
  login: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 26,
  },

  line: {
    marginTop: '11%',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '85%',
  },

  InputView: {
    backgroundColor: '#322251',
    position: 'relative',
    alignSelf: 'center',
    bottom: '14%',

    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  TextInput: {
    position: 'relative',
    bottom: 0,

    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
  },
});

function LoginScreen({navigation}): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/backgroundimage2.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={{top: '15.7%'}}>
          <Text style={styles.login}>Let`s get you in</Text>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Image
              source={require('./assets/images/google1.png')}
              style={styles.imageGoogle1}></Image>
            <Text style={styles.GoogleLoginText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFacebook}>
            <Image
              source={require('./assets/images/facebook1.png')}
              style={styles.imageGoogle1}></Image>
            <Text style={styles.GoogleLoginText}>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFacebook}>
            <Image
              source={require('./assets/images/apple1.png')}
              style={styles.imageGoogle1}></Image>
            <Text style={styles.GoogleLoginText}>Continue with Apple</Text>
          </TouchableOpacity>
          <View style={styles.line}>
            <View
              style={{
                backgroundColor: 'white',
                height: 2,

                flex: 1,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                color: '#FFFFFF',
                alignSelf: 'center',
                paddingHorizontal: 5,
                fontSize: 13,
                fontWeight: '600',
                fontFamily:
                  Platform.OS === 'android'
                    ? 'centurygothicbold'
                    : 'Century Gothic',
              }}>
              or
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                height: 2,
                flex: 1,
                alignSelf: 'center',
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Password')}>
            <Text style={styles.buttonLoginText}>Log in with a password</Text>
          </TouchableOpacity>

          <Text style={styles.signUpText}>Don`t have an account? Sign Up</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

function PasswordScreen(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/backgroundimage2.png')}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.login}>Login your account</Text>
        <View style={styles.InputView}>
          <TextInput
            style={styles.TextInput}
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor={'#FFFFFF'}
            onChangeText={email => setEmail(email)}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Password"
          component={PasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
