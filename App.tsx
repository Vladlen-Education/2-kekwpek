/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';
import RadialGradient from 'react-native-radial-gradient';
import InsetShadow from 'react-native-inset-shadow';

function App(): JSX.Element {
  useEffect(() => {
    TrackPlayer.setupPlayer();
  });

  const onPress = async () => {
    Alert.alert('Вы выигарли сочный махентохен');
  };

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
    <View>
      <View style={styles.container}>
        <RadialGradient
          style={{width: 500, height: 300, position: 'absolute'}}
          colors={['#26284F', '#25284E', '#212245', '#110B1D']}
          stops={[0.2, 0.4, 0.6, 0.8]}
          center={[110, 110]}
          radius={200}></RadialGradient>
      </View>
      <View>
        <RadialGradient
          style={{
            width: 500,
            height: 400,
            position: 'absolute',
            left: 0,
            top: 300,
          }}
          colors={['#26284F', '#25284E', '#212245', '#110B1D']}
          stops={[0.2, 0.4, 0.6, 0.8]}
          center={[400, 200]}
          radius={200}></RadialGradient>
      </View>

      <Image
        source={require('./assets/images/headphones.png')}
        style={styles.headphone}></Image>
      <Image
        source={require('./assets/images/abstrakt.png')}
        style={styles.abstract}></Image>
      <Text style={styles.header}>Getting Started</Text>
      <Text style={styles.subtitle}>Getting Started Getting</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require('./assets/images/Vector.png')}
          style={styles.note}></Image>
        <Text style={styles.text}>Let's go</Text>
      </TouchableOpacity>
      <Text style={styles.kekwpek}>kekwpek</Text>
      <Text style={styles.zhopa}>Best student</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#110B1D',
  },

  note: {
    top: 19,
    left: 140,
  },

  abstract: {
    alignSelf: 'center',
    position: 'relative',
    bottom: 250,
  },

  headphone: {
    position: 'relative',
    alignSelf: 'center',
    top: 100,
  },

  header: {
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    top: '44%',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 32,
  },

  subtitle: {
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    top: '49%',
    fontFamily: Platform.OS === 'android' ? 'centurygothic' : 'Century Gothic',
    fontSize: 15,
    fontWeight: 'regular',
  },

  button: {
    position: 'relative',
    alignSelf: 'center',
    bottom: '30%',
    backgroundColor: '#966AEF',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    height: 69,
    width: 200,
    borderRadius: 20,
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
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
  },

  kekwpek: {
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '24%',
    fontFamily:
      Platform.OS === 'android' ? 'centurygothicbold' : 'Century Gothic',
    fontSize: 15,
  },
  zhopa: {
    color: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '22%',
    fontFamily: Platform.OS === 'android' ? 'centurygothic' : 'Century Gothic',
    fontSize: 10,
  },
});

export default App;
