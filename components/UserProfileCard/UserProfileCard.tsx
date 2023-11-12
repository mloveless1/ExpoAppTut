import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Profile } from '../../types/profile'

// Define the types for the component's props
type UserProfileCardProps = {
  profile: Profile
};

// UserProfileCard.tsx
const UserProfileCard = ({ profile }: UserProfileCardProps) => {
  if (!profile) {
    return <Text>No profile data.</Text>;
  }

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.bio}>{profile.city}, {profile.state}</Text>
      <Text style={styles.bio}>{profile.bio}</Text>
      <Text style={styles.bio}>{profile.occupation}</Text>
      <Text style={styles.bio}>{profile.gender}</Text>
      <Text style={styles.bio}>{profile.height}</Text>
    </View>
  );
};


// Styles for the component
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // for Android shadow
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default UserProfileCard;
