import React from 'react';
import {View, Text, Button} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <View>
      <Text>Register Page</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default RegisterScreen;
