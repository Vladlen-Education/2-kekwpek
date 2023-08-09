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
import RadialGradient from 'react-native-radial-gradient';
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
      <ImageBackground
        source={require('./assets/images/backgroundimage.png')}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
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

        <StatusBar barStyle="light-content" hidden={true}></StatusBar>

        <Text style={styles.kekwpek}>kekwpek</Text>
        <Text style={styles.zhopa}>Best student</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },

  background: {
    flex: 1,
    flexDirection: 'column',
  },

  note: {
    top: 19,
    left: 140,
  },

  header: {
    color: '#FFFFFF',
    position: 'relative',
    paddingBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    top: '2%',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 32,
  },

  subtitle: {
    color: '#FFFFFF',
    position: 'relative',
    alignSelf: 'center',
    paddingTop: 10,
    fontFamily: Platform.OS === 'android' ? 'centurygothic' : 'Century Gothic',
    fontSize: 15,
    fontWeight: 'regular',
  },

  button: {
    position: 'relative',
    alignSelf: 'center',
    top: '10%',
    backgroundColor: '#966AEF',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    height: 69,
    width: 200,
    borderRadius: 20,
  },
  buttonGoogle: {
    position: 'relative',
    alignSelf: 'center',
    bottom: '14%',
    backgroundColor: '#322251',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  buttonFacebook: {
    position: 'relative',
    alignSelf: 'center',
    bottom: '12%',
    backgroundColor: '#322251',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  buttonApple: {
    position: 'relative',
    alignSelf: 'center',
    bottom: '10%',
    backgroundColor: '#322251',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  buttonLogin: {
    position: 'relative',
    alignSelf: 'center',

    backgroundColor: '#966AEF',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
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
    left: 35,
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
    position: 'relative',
    alignSelf: 'center',
    bottom: '0%',
    fontFamily: Platform.OS === 'android' ? 'centurygothic' : 'Century Gothic',
    fontSize: 13,
  },

  shadow: {
    borderRadius: 25,
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
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '6%',
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 15,
  },
  zhopa: {
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '4%',
    fontFamily: Platform.OS === 'android' ? 'centurygothic' : 'Century Gothic',
    fontSize: 10,
  },
  login: {
    color: '#FFFFFF',
    position: 'relative',
    alignSelf: 'center',
    bottom: '18%',
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 26,
  },

  line: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: '28%',
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
        style={{flex: 1, justifyContent: 'center'}}>
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
        <TouchableOpacity style={styles.buttonApple}>
          <Image
            source={require('./assets/images/apple1.png')}
            style={styles.imageGoogle1}></Image>
          <Text style={styles.GoogleLoginText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Password')}>
          <Text style={styles.buttonLoginText}>Log in with a password</Text>
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
        <Text style={styles.signUpText}>Don`t have an account? Sign Up</Text>
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
