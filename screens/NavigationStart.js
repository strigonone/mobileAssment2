import * as React from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NavigationStart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigationStartView}>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require('../assets/maps.png')}
      />
      <View style={styles.homeIndicatorOnLight}>
        <View style={styles.homeIndicatorView} />
      </View>
      <View style={styles.groupView}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require('../assets/shape1.png')}
        />
      </View>
      <View style={styles.statusBarView}>
        <View style={styles.barsStatusBarIPhoneL}>
          <View style={styles.batteryView}>
            <View style={styles.borderView} />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require('../assets/cap.png')}
            />
            <View style={styles.capacityView} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require('../assets/wifi.png')}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require('../assets/cellular-connection.png')}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate('Directions')}>
        <View style={styles.groupView1}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require('../assets/rectangle-2.png')}
          />
          <Text style={styles.thAvenue4thCro}>Where are you going to?</Text>
        </View>
        <Image
          style={styles.shapeIcon1}
          resizeMode="cover"
          source={require('../assets/shape2.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    overflow: 'hidden',
  },
  homeIndicatorView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    height: 5,
  },
  homeIndicatorOnLight: {
    position: 'absolute',
    right: 121,
    bottom: 9,
    left: 120,
    height: 5,
  },
  rectangleView: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 13,
    backgroundColor: '#b6e13d',
    shadowColor: 'rgba(32, 32, 32, 0.06)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 121,
    height: 50,
  },
  shapeIcon: {
    position: 'absolute',
    height: '47.25%',
    width: '19.52%',
    top: '27.37%',
    right: '40.24%',
    bottom: '25.37%',
    left: '40.24%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  groupView: {
    position: 'absolute',
    top: 715,
    left: 229,
    width: 121,
    height: 50,
  },
  borderView: {
    position: 'absolute',
    height: '100%',
    width: '90.43%',
    top: '0%',
    right: '9.57%',
    bottom: '0%',
    left: '0%',
    borderRadius: 2.67,
    borderStyle: 'solid',
    borderColor: '#333',
    borderWidth: 1,
    opacity: 0.35,
  },
  capIcon: {
    position: 'absolute',
    height: '35.29%',
    width: '5.46%',
    top: '32.35%',
    right: '0%',
    bottom: '32.35%',
    left: '94.54%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    opacity: 0.4,
  },
  capacityView: {
    position: 'absolute',
    height: '64.71%',
    width: '73.99%',
    top: '17.65%',
    right: '17.79%',
    bottom: '17.65%',
    left: '8.22%',
    borderRadius: 1.33,
    backgroundColor: '#333',
  },
  batteryView: {
    position: 'absolute',
    height: '25.76%',
    width: '6.49%',
    top: '39.39%',
    right: '3.82%',
    bottom: '34.85%',
    left: '89.69%',
  },
  wifiIcon: {
    position: 'relative',
    width: 15.33,
    height: 11,
  },
  cellularConnectionIcon: {
    position: 'relative',
    width: 17,
    height: 10.67,
  },
  timeText: {
    position: 'absolute',
    transform: [
      {
        translateY: -3.5,
      },
    ],
    width: '100%',
    top: '50%',
    left: '0%',
    fontSize: 15,
    letterSpacing: -0.3,
    fontWeight: '900',
    fontFamily: 'Noto Sans JP',
    color: '#333',
    textAlign: 'center',
  },
  timeStyleView: {
    position: 'absolute',
    height: '47.73%',
    width: '14.4%',
    top: '15.91%',
    right: '80%',
    bottom: '36.36%',
    left: '5.6%',
  },
  barsStatusBarIPhoneL: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 375,
    height: 44,
  },
  statusBarView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 375,
    height: 44,
  },
  rectangleIcon: {
    position: 'absolute',
    height: '183.33%',
    width: '112.31%',
    top: '-31.25%',
    right: '-6.15%',
    bottom: '-52.08%',
    left: '-6.15%',
    borderRadius: 100,
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  thAvenue4thCro: {
    position: 'absolute',
    transform: [
      {
        translateY: -6,
      },
    ],
    top: '50%',
    left: '15.08%',
    fontSize: 14,
    fontFamily: 'Noto Sans JP',
    color: '#333',
    textAlign: 'left',
  },
  groupView1: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  shapeIcon1: {
    position: 'relative',
    width: 14,
    height: 14,
  },
  groupPressable: {
    position: 'absolute',
    height: '5.91%',
    width: '86.67%',
    top: '6.65%',
    right: '6.67%',
    bottom: '87.44%',
    left: '6.67%',
  },
  navigationStartView: {
    position: 'relative',
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default NavigationStart;
