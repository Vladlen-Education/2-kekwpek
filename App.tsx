/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
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
      <Button onPress={onPressStop} title="stop бля" />
      <Button onPress={onPressPlay} title="play бля" />

      <Image
        source={{
          uri: 'https://pics.livejournal.com/nepejvoda_n_n/pic/00004ks8/s640x480',
        }}
        height={640}
        width={480}
      />
      <Text>Привет пидоры</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
