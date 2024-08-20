import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import SplashScreen from './screens/SplashScreen';
import {configureFonts, MD3LightTheme, PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();
const fontConfig = {
  fontFamily: 'Poppins',
};

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  fonts: configureFonts(fontConfig),
  colors: {
    ...MD3LightTheme.colors,
    primary: '#A43333',
    secondary: '#AF392F',
    tertiary: '#3D7B3F',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
