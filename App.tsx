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
} from 'react-native';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

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
    <View style={styles.container}>
      <Text style={styles.header}>Getting Started</Text>
      <Text style={styles.subtitle}>Getting Started Getting</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Let's go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6886EF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: '#FFFFFF',
    marginTop: 80,
    fontFamily: Platform.OS === 'android' ? 'burgelabold' : 'Burgela',
    fontSize: 40,
  },

  subtitle: {
    color: '#FFFFFF',
    marginTop: 10,
    fontFamily: Platform.OS === 'android' ? 'burgelabold' : 'Burgela',
    fontSize: 12,
  },

  button: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#966AEF',
    height: 42,
    width: 140,
    marginTop: 50,
    borderRadius: 20,
  },
  text: {
    flex: 1,
    padding: 10,
    position: 'relative',
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'android' ? 'burgelabold' : 'Burgela',
  },
});

export default App;
