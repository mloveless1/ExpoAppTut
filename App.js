import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import ProfileComponent from './components/UserProfileCard/ProfileComponent';
import MessagesComponent from './components/Messages/MessageComponent';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <SafeAreaView>
      <MessagesComponent />
    </SafeAreaView>
  );
};

export default App;
