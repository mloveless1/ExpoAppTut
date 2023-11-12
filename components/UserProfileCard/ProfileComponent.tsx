// components/ProfileComponent.tsx
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import UserProfileCard from './UserProfileCard';
import useFetchProfile from '../../hooks/useFetchProfile';

const ProfileComponent = () => {
  const profileId = '1'; // Example profile ID
  const { profile, loading, error } = useFetchProfile(profileId);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching profile: {error.message}</Text>;
  }

  return (
    <View>
      {profile && <UserProfileCard profile={profile} />}
    </View>
  );
};

export default ProfileComponent;
