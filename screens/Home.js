import * as React from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeView}>
      <Image
        style={styles.mainBackground1Icon}
        resizeMode="cover"
        source={require('../assets/mainbackground-1.png')}
      />
      <View style={styles.passwordButtonView}>
        <View style={styles.rectangleView} />
        <Text style={styles.passwordText}>Password</Text>
      </View>
      <Pressable
        style={styles.passwordButtonPressable}
        onPress={() => navigation.navigate('NavigationStart')}>
        <View style={styles.rectangleView1} />
        <Text style={styles.passwordText1}>Login</Text>
      </Pressable>
      <View style={styles.userDetailsEntryView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.loginText}>Enter your email</Text>
      </View>
      <Pressable
        style={styles.forgotPasswordPressable}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Pressable>
      <Text style={styles.orLoginWith}>Or login with</Text>
      <Pressable
        style={styles.tryAppFirst5DaysRemaini1}
        onPress={() => navigation.navigate('NavigationStart')}>
        <Text style={styles.tryAppFirst5DaysRemaini}>
          Try App first! (5 days remaining)
        </Text>
      </Pressable>
      <Pressable
        style={styles.dontHaveAnAccountSignUp}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
        <Text style={styles.signUpText}> Sign up.</Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require('../assets/vector1.png')}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require('../assets/vector2.png')}
      />
      <View style={styles.facebookSquareView} />
      <View style={styles.googleView} />
      <Image
        style={styles.trafficLightVectorIcon1}
        resizeMode="cover"
        source={require('../assets/trafficlightvectoricon-1.png')}
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
  passwordText: {
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
  passwordButtonView: {
    position: 'absolute',
    height: '5%',
    width: '77.78%',
    top: '40%',
    right: '11.39%',
    bottom: '55%',
    left: '10.83%',
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
    backgroundColor: '#71ff98',
  },
  passwordText1: {
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
  },
  passwordButtonPressable: {
    position: 'absolute',
    height: '5%',
    width: '77.78%',
    top: '50%',
    right: '11.39%',
    bottom: '45%',
    left: '10.83%',
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
  loginText: {
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
  userDetailsEntryView: {
    position: 'absolute',
    height: '5%',
    width: '77.78%',
    top: '30%',
    right: '11.39%',
    bottom: '65%',
    left: '10.83%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  forgotPasswordText: {
    fontSize: 13,
    fontFamily: 'Noto Sans JP',
    color: '#4f93ed',
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  forgotPasswordPressable: {
    position: 'absolute',
    left: 212,
    top: 367,
  },
  orLoginWith: {
    position: 'absolute',
    top: 686,
    left: 115.8,
    fontSize: 19.65,
    fontFamily: 'Noto Sans JP',
    color: '#000',
    textAlign: 'left',
  },
  tryAppFirst5DaysRemaini: {
    fontSize: 13,
    fontFamily: 'Noto Sans JP',
    color: '#4f93ed',
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  tryAppFirst5DaysRemaini1: {
    position: 'absolute',
    left: 91,
    top: 461,
  },
  dontHaveAn: {
    color: '#000',
  },
  signUpText: {
    color: '#4f93ed',
  },
  dontHaveAnAccountSignUp: {
    position: 'absolute',
    top: 571,
    left: 89,
    fontSize: 13,
    fontFamily: 'Noto Sans JP',
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  vectorIcon: {
    position: 'absolute',
    height: '4.59%',
    width: '10.19%',
    top: '93.12%',
    right: '73.67%',
    bottom: '2.3%',
    left: '16.14%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  vectorIcon1: {
    position: 'absolute',
    height: '4.95%',
    width: '10.86%',
    top: '92.81%',
    right: '16.05%',
    bottom: '2.24%',
    left: '73.09%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  facebookSquareView: {
    position: 'absolute',
    top: 480.22,
    left: 453.22,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 25,
    height: 25,
    overflow: 'hidden',
  },
  googleView: {
    position: 'absolute',
    top: 480.22,
    left: 453.22,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 25,
    height: 25,
    overflow: 'hidden',
  },
  trafficLightVectorIcon1: {
    position: 'absolute',
    top: 67,
    left: 103,
    width: 152,
    height: 152,
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
  homeView: {
    position: 'relative',
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default Home;
