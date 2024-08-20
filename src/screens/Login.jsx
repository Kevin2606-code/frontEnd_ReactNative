import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useState} from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          padding: 20,
          marginTop: 10,
          marginBottom: 50,
          marginLeft: 10,
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 40,
          }}>
          Welcome Back!
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginLeft: 10,
        }}>
        Email
      </Text>
      <TextInput
        value={email}
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          borderRadius: 5,
          marginBottom: 20,
          borderColor: 'black',
          borderWidth: 1,
        }}
        placeholder="contoh:johndee@gmail.com"
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginLeft: 10,
        }}>
        Password
      </Text>
      <TextInput
        value={password}
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          borderRadius: 5,
          marginBottom: 20,
          borderColor: 'black',
          borderWidth: 1,
        }}
        placeholder="6+ karakter"
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          marginHorizontal: 10,
          marginBottom: 30,
          paddingVertical: 10,
          borderRadius: 5,
          elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 10,
          }}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'blue'}}>Sign Up for free</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
