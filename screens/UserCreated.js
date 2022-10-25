import * as React from 'react';
import {Image, StyleSheet, Text, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UserCreated = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userCreatedView}>
      <Image
        style={styles.mainBackground1Icon}
        resizeMode="cover"
        source={require('../assets/mainbackground-1.png')}
      />
      <Pressable
        style={styles.loginPressable}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <Text style={styles.welcomeUserText}>
        <Text style={styles.welcomeText}>{`Welcome `}</Text>
        <Text style={styles.userText}>“User”</Text>
      </Text>
      <Image
        style={styles.greenLightGo1Icon}
        resizeMode="cover"
        source={require('../assets/greenlightgo-1.png')}
      />
      <View style={styles.statusBarView}>
        <View style={styles.barsStatusBarIPhoneL}>
          <View style={styles.batteryView}>
            <View style={styles.borderView} />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require('../assets/cap2.png')}
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
    </View>
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
  loginText: {
    fontSize: 32,
    fontFamily: 'Noto Sans JP',
    color: '#4f93ed',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 185,
    height: 129,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  loginPressable: {
    position: 'absolute',
    left: 95,
    top: 231,
  },
  welcomeText: {
    color: '#000',
  },
  userText: {
    color: '#71ff98',
  },
  welcomeUserText: {
    position: 'absolute',
    top: 70,
    left: 9,
    fontSize: 48,
    fontFamily: 'Noto Sans JP',
    textAlign: 'left',
    width: 258,
    height: 198,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  greenLightGo1Icon: {
    position: 'absolute',
    top: 334,
    left: 0,
    width: 360.21,
    height: 451.55,
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
  userCreatedView: {
    position: 'relative',
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default UserCreated;
