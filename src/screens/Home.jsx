import {View, Text, Button, Image} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View>
      <Image
        source={require('../assets/images/mobil.png')}
        style={{width: 600, height: 600}}
      />
      <Text>Home</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        color="green"
      />
    </View>
  );
}
