import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Login: undefined;
  Appointment: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;


export default function Login() {
  const [input, setInput] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    
    navigation.navigate('Appointment'); // Navigate to Appointment screen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20, color:'#000',}}>Login</Text>
      <TextInput 
        placeholder="Enter Phone Number or Email"
        placeholderTextColor="#000"
        value={input}
        onChangeText={setInput}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5, color:'#000'}}
      />
      <TouchableOpacity 
        style={{ backgroundColor: '#1B4965', padding: 15, borderRadius: 10 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
