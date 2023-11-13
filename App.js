import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfileComponent from './components/UserProfileCard/ProfileComponent';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <SafeAreaView>
      <ProfileComponent />
    </SafeAreaView>
  );
};

export default App;
