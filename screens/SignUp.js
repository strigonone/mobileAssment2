import * as React from 'react';
import {Image, StyleSheet, Text, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpView}>
      <Image
        style={styles.mainBackground1Icon}
        resizeMode="cover"
        source={require('../assets/mainbackground-1.png')}
      />
      <Image
        style={styles.mainBackground2Icon}
        resizeMode="cover"
        source={require('../assets/mainbackground-1.png')}
      />
      <Pressable
        style={styles.loginPressable}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <Text style={styles.signUpText}>Sign Up</Text>
      <View style={styles.userDetailsEntryEmailView}>
        <View style={styles.rectangleView} />
        <Text style={styles.loginText1}>Enter your email</Text>
      </View>
      <View style={styles.userDetailsEntryEmailView1}>
        <View style={styles.rectangleView1} />
        <Text style={styles.loginText2}>Enter your name</Text>
      </View>
      <View style={styles.userDetailsEntryConfirmPassworView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.loginText3}>Confirm Password</Text>
      </View>
      <View style={styles.userDetailsEntryEnterPassView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.loginText4}>Enter your password</Text>
      </View>
      <Pressable
        style={styles.confirmationButtonPressable}
        onPress={() => navigation.navigate('UserCreated')}>
        <View style={styles.rectangleView4} />
        <Text style={styles.passwordText}>Sign Up</Text>
      </Pressable>
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
  mainBackground2Icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 827,
    height: 896.96,
  },
  loginText: {
    fontSize: 13,
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
    left: 90,
    top: 546,
  },
  signUpText: {
    position: 'absolute',
    top: 70,
    left: 9,
    fontSize: 48,
    fontFamily: 'Noto Sans JP',
    color: '#000',
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
  rectangleView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  loginText1: {
    position: 'absolute',
    height: '97.5%',
    width: '95.71%',
    top: '0%',
    left: '3.93%',
    fontSize: 14,
    fontFamily: 'Noto Sans JP',
    color: '#000',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  userDetailsEntryEmailView: {
    position: 'absolute',
    height: '5%',
    width: '77.78%',
    top: '35%',
    right: '10.83%',
    bottom: '60%',
    left: '11.39%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangleView1: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  loginText2: {
    position: 'absolute',
    height: '97.5%',
    width: '95.71%',
    top: '0%',
    left: '3.93%',
    fontSize: 14,
    fontFamily: 'Noto Sans JP',
    color: '#000',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  userDetailsEntryEmailView1: {
    position: 'absolute',
    height: '5%',
    width: '77.78%',
    top: '25%',
    right: '10.83%',
    bottom: '70%',
    left: '11.39%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangleView2: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  loginText3: {
    position: 'absolute',
    height: '97.5%',
    width: '95.71%',
    top: '0%',
    left: '3.93%',
    fontSize: 14,
    fontFamily: 'Noto Sans JP',
    color: '#000',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  userDetailsEntryConfirmPassworView: {
    position: 'absolute',
    height: '5%',
    width: '77.78%',
    top: '54.38%',
    right: '10.83%',
    bottom: '40.63%',
    left: '11.39%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangleView3: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  loginText4: {
    position: 'absolute',
    height: '97.5%',
    width: '95.71%',
    top: '0%',
    left: '3.93%',
    fontSize: 14,
    fontFamily: 'Noto Sans JP',
    color: '#000',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  userDetailsEntryEnterPassView: {
    position: 'absolute',
    height: '5%',
    width: '77.78%',
    top: '45%',
    right: '10.83%',
    bottom: '50%',
    left: '11.39%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangleView4: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 100,
    backgroundColor: '#71ff98',
  },
  passwordText: {
    position: 'absolute',
    height: '100%',
    width: '99.29%',
    top: '0%',
    left: '0.36%',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Noto Sans JP',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  confirmationButtonPressable: {
    position: 'absolute',
    height: '5%',
    width: '77.78%',
    top: '65%',
    right: '10.83%',
    bottom: '30%',
    left: '11.39%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
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
  signUpView: {
    position: 'relative',
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default SignUp;
