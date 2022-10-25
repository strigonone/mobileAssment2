import * as React from 'react';
import {Image, StyleSheet, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashScreenPressable}
      onPress={() => navigation.navigate('LandingScreen')}>
      <Image
        style={styles.mainBackground1Icon}
        resizeMode="cover"
        source={require('../assets/mainbackground-1.png')}
      />
      <Image
        style={styles.trafficLightVectorIcon1}
        resizeMode="cover"
        source={require('../assets/trafficlightvectoricon-11.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainBackground1Icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 827,
    height: 896.96,
  },
  trafficLightVectorIcon1: {
    position: 'absolute',
    top: 174,
    left: 0,
    width: 453,
    height: 453,
  },
  splashScreenPressable: {
    position: 'relative',
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default SplashScreen;
