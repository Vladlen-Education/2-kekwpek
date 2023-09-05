/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
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
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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
                paddingHorizontal: 17,
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
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/backgroundimage2.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={{top: '15.7%'}}>
          <Text style={styles.passwordLogin}>Login your account</Text>
          <View style={styles.InputView}>
            <Image
              source={require('./assets/images/mail.png')}
              style={{
                width: 15,
                height: 12,
                marginTop: 24,
                marginLeft: 24,
                marginRight: 25,
              }}
              tintColor="#5a4e74"></Image>
            <TextInput
              style={styles.TextInput}
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor={'#FFFFFF'}
              onChangeText={email => setEmail(email)}
            />
          </View>
          <View style={styles.InputViewPassword}>
            <Image
              source={require('./assets/images/icon.png')}
              style={{
                width: 12,
                height: 14,
                marginTop: 23,
                marginLeft: 25,
                marginRight: 27,
              }}
              tintColor="#5a4e74"></Image>
            <TextInput
              style={styles.TextInput}
              autoCorrect={false}
              secureTextEntry={hidePass ? true : false}
              placeholder="Password"
              placeholderTextColor={'#FFFFFF'}
              onChangeText={password => setPassword(password)}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                marginTop: 24,
                left: '87.5%',
              }}
              onPress={() => setHidePass(!hidePass)}>
              <Image
                source={require('./assets/images/eye.png')}
                style={{height: 12.5, width: 16}}
                tintColor="#5a4e74"></Image>
            </TouchableOpacity>
          </View>
          <BouncyCheckbox
            style={{left: 38, marginTop: '9%'}}
            size={11}
            text="Remember me"
            textStyle={{
              textDecorationLine: 'none',
              color: '#FFFFFF',
              fontSize: 11,
              fontWeight: '600',
              fontFamily:
                Platform.OS === 'android'
                  ? 'centurygothicbold'
                  : 'Century Gothic',
            }}
            innerIconStyle={{borderColor: '#9568ef', borderRadius: 2}}
            fillColor="#9568ef"
            onPress={(isChecked: boolean) => {}}
          />
          <TouchableOpacity style={styles.buttonLoginPassword}>
            <Text style={styles.buttonLoginText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot the password</Text>
          <View style={styles.line2}>
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
                paddingHorizontal: 23,
                fontSize: 13,
                fontWeight: '600',
                fontFamily:
                  Platform.OS === 'android'
                    ? 'centurygothicbold'
                    : 'Century Gothic',
              }}>
              or continue with
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
          <View
            style={{
              flexDirection: 'row',
              marginLeft: '18.2%',
              marginRight: '18.2%',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity style={styles.buttonGoogleSmall}>
              <Image
                source={require('./assets/images/google1.png')}
                style={styles.imageGoogle2}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFacebookSmall}>
              <Image
                source={require('./assets/images/facebook1.png')}
                style={styles.imageGoogle2}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFacebookSmall}>
              <Image
                source={require('./assets/images/apple1.png')}
                style={styles.imageGoogle2}></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.signUpText2}>Don`t have an account? Sign Up</Text>
        </View>
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
    marginTop: 20,
    backgroundColor: '#322251',
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  buttonGoogleSmall: {
    backgroundColor: '#3d384d',
    height: 50,
    width: 50,
    borderRadius: 55,
    marginTop: '16%',
  },

  buttonFacebookSmall: {
    backgroundColor: '#3d384d',
    height: 50,
    width: 50,
    borderRadius: 55,
    marginTop: '16%',
  },

  buttonLogin: {
    marginTop: '10%',
    alignSelf: 'center',
    backgroundColor: '#966AEF',
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  buttonLoginPassword: {
    marginTop: '7.5%',
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

  imageGoogle2: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    alignSelf: 'center',
    top: 10,
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

  signUpText2: {
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: '7.8%',
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

  passwordLogin: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 26,
    marginBottom: '9%',
  },

  line: {
    marginTop: '11%',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '85%',
  },

  line2: {
    marginTop: '11%',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '85%',
  },

  InputView: {
    flexDirection: 'row',
    backgroundColor: '#322251',
    alignSelf: 'center',
    height: 59,
    width: '90%',
    borderRadius: 10,
  },

  InputViewPassword: {
    flexDirection: 'row',
    backgroundColor: '#322251',
    alignSelf: 'center',
    height: 59,
    width: '90%',
    borderRadius: 10,
    marginTop: '7%',
  },

  TextInput: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
  },

  forgotPassword: {
    color: '#9668EF',
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 13,
    marginTop: '3%',
  },
});

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
