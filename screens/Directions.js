import * as React from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Directions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.directionsView}>
      <View style={styles.groupView}>
        <Image
          style={styles.mapsIcon}
          resizeMode="cover"
          source={require('../assets/maps.png')}
        />
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require('../assets/vector-5.png')}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require('../assets/group-9.png')}
      />
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require('../assets/group-6.png')}
      />
      <View style={styles.groupView1}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require('../assets/rectangle-5.png')}
        />
        <Text style={styles.pickupText}>Arrival</Text>
        <Text style={styles.minsText}>( 2 mins )</Text>
      </View>
      <View style={styles.tAB1View}>
        <View style={styles.rectangleView} />
        <Text style={styles.greenFor5MoreSeconds}>
          Green for 5 more seconds
        </Text>
        <View style={styles.groupView2}>
          <Text style={styles.greenLightAhead}>Green Light ahead</Text>
          <Text style={styles.greenLightAhead1}>Green Light ahead</Text>
        </View>
        <View style={styles.groupView3}>
          <Image
            style={styles.trafficGreenGo1Icon}
            resizeMode="cover"
            source={require('../assets/trafficgreengo-1.png')}
          />
        </View>
      </View>
      <View style={styles.tAB2View}>
        <View style={styles.rectangleView1} />
        <View style={styles.groupView4}>
          <Text style={styles.usersWithinTheVicinity}>
            6 Users within the vicinity
          </Text>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require('../assets/vector.png')}
          />
        </View>
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
      <View style={styles.homeIndicatorOnLight}>
        <View style={styles.homeIndicatorView} />
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate('NavigationStart')}>
        <View style={styles.rectangleView2} />
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require('../assets/shape.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mapsIcon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '5.02%',
    right: '-57.55%',
    bottom: '-5.02%',
    left: '57.55%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  groupView: {
    position: 'absolute',
    height: '117.73%',
    width: '270.13%',
    top: '-5.91%',
    right: '-14.67%',
    bottom: '-11.82%',
    left: '-155.47%',
  },
  vectorIcon: {
    position: 'absolute',
    top: 274.14,
    left: 108.77,
    width: 99.24,
    height: 163.22,
  },
  groupIcon: {
    position: 'absolute',
    top: 263,
    left: 148,
    width: 32,
    height: 32,
  },
  groupIcon1: {
    position: 'absolute',
    height: '9.85%',
    width: '21.33%',
    top: '51.11%',
    right: '63.2%',
    bottom: '39.04%',
    left: '15.47%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  rectangleIcon: {
    position: 'absolute',
    height: '158.82%',
    width: '118.35%',
    top: '-14.71%',
    right: '-9.17%',
    bottom: '-44.12%',
    left: '-9.17%',
    borderRadius: 3,
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  pickupText: {
    position: 'absolute',
    transform: [
      {
        translateY: -5,
      },
    ],
    top: '50%',
    left: '9.17%',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Noto Sans JP',
    color: '#333',
    textAlign: 'left',
  },
  minsText: {
    position: 'absolute',
    transform: [
      {
        translateY: -5,
      },
    ],
    top: '50%',
    left: '46.79%',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Noto Sans JP',
    color: '#333',
    textAlign: 'left',
  },
  groupView1: {
    position: 'absolute',
    height: '4.19%',
    width: '29.07%',
    top: '27.96%',
    right: '41.07%',
    bottom: '67.86%',
    left: '29.87%',
  },
  rectangleView: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 17.16,
    backgroundColor: '#fff',
    shadowColor: 'rgba(32, 32, 32, 0.06)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 346,
    height: 136.3,
  },
  greenFor5MoreSeconds: {
    position: 'absolute',
    top: 110,
    left: 131,
    fontSize: 14,
    letterSpacing: -0.71,
    lineHeight: 14,
    fontWeight: '700',
    fontFamily: 'Noto Sans JP',
    color: '#b6e13d',
    textAlign: 'left',
    width: 204,
    height: 15,
  },
  greenLightAhead: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 32,
    letterSpacing: -0.71,
    lineHeight: 32,
    fontWeight: '100',
    fontFamily: 'Noto Sans JP',
    color: '#333',
    textAlign: 'center',
    width: 202,
    height: 84,
  },
  greenLightAhead1: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 32,
    letterSpacing: -0.71,
    lineHeight: 32,
    fontWeight: '100',
    fontFamily: 'Noto Sans JP',
    color: '#333',
    textAlign: 'center',
    width: 202,
    height: 84,
  },
  groupView2: {
    position: 'absolute',
    top: 26,
    left: 131,
    width: 202,
    height: 84,
  },
  trafficGreenGo1Icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 56,
    height: 127.27,
  },
  groupView3: {
    position: 'absolute',
    top: 4,
    left: 49,
    width: 223,
    height: 127.27,
  },
  tAB1View: {
    position: 'absolute',
    top: 553,
    left: 15,
    width: 346,
    height: 136.3,
  },
  rectangleView1: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 10.2,
    backgroundColor: '#fff',
    shadowColor: 'rgba(32, 32, 32, 0.06)',
    shadowOffset: {
      width: 0,
      height: 2.377108573913574,
    },
    shadowRadius: 11.89,
    elevation: 11.89,
    shadowOpacity: 1,
    width: 205.62,
    height: 81,
  },
  usersWithinTheVicinity: {
    position: 'absolute',
    top: 0,
    left: 41.61,
    fontSize: 20,
    letterSpacing: -0.48,
    lineHeight: 20,
    fontWeight: '100',
    fontFamily: 'Noto Sans JP',
    color: '#333',
    textAlign: 'center',
    width: 136.15,
    height: 56.62,
  },
  vectorIcon1: {
    position: 'absolute',
    height: '76.62%',
    width: '24.41%',
    top: '0.8%',
    right: '75.59%',
    bottom: '22.58%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  groupView4: {
    position: 'absolute',
    top: 15,
    left: 21.39,
    width: 177.76,
    height: 56.62,
  },
  tAB2View: {
    position: 'absolute',
    top: 715,
    left: 15,
    width: 205.62,
    height: 81,
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
  rectangleView2: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 13,
    backgroundColor: '#ff0000',
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
    height: '39.14%',
    width: '16.17%',
    top: '31.43%',
    right: '41.91%',
    bottom: '29.43%',
    left: '41.91%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  groupPressable: {
    position: 'absolute',
    top: 715,
    left: 229,
    width: 121,
    height: 50,
  },
  directionsView: {
    position: 'relative',
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default Directions;
