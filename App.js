const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Directions from './screens/Directions';
import NavigationStart from './screens/NavigationStart';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import UserCreated from './screens/UserCreated';
import PasswordSent from './screens/PasswordSent';
import Home from './screens/Home';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Directions"
              component={Directions}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NavigationStart"
              component={NavigationStart}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UserCreated"
              component={UserCreated}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PasswordSent"
              component={PasswordSent}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
