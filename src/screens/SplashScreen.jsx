import {View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

import {useState} from 'react';
import {Text} from 'react-native-paper';

export default function SplashScreen({navigation}) {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 3000);

  if (!timePassed) {
    return (
      <View>
        <ImageBackground
          style={style.image}
          source={require('../assets/images/mobil.png')}>
          <Text style={style.text}>
            {`TMMIN 
            CAR RENTAL`}
          </Text>
        </ImageBackground>
      </View>
    );
  }
  navigation.navigate('Login');
  return null;
}

const style = StyleSheet.create({
  image: {width: '100%', height: '100%'},
  text: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 700,
    textAlign: 'right',
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
});
