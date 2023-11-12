import React from 'react';
import { SafeAreaView } from 'react-native';
import UserProfileCard from './components/UserProfileCard/UserProfileCard'; // Adjust the import path as needed
import ProfileComponent from './components/UserProfileCard/ProfileComponent';

const App = () => {
  return (
    <SafeAreaView>
      <ProfileComponent />
    </SafeAreaView>
  );
};

export default App;
