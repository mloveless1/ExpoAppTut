// components/MessagesComponent.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import useFetchMessages from '../../hooks/useFetchMessages';
import { Message } from '../../types/message';

const MessagesComponent: React.FC = () => {
  const receiver_id = '1';
  const { messages, loading, error } = useFetchMessages(receiver_id);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching messages: {error.message}</Text>;
  }

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.container}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
    </View>
  );

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={renderMessage}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light grey background for the whole container
  },
  messageList: {
    paddingHorizontal: 10, // Spacing on the sides of the message list
  },
  messageCard: {
    backgroundColor: 'white', // White background for each message card
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android (drop shadow)
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333', // Darker text for the sender's name
    marginBottom: 5, // Space between sender's name and message content
  },
  content: {
    fontSize: 14,
    color: '#555555', // Slightly lighter text for message content
  },
  timestamp: {
    fontSize: 12,
    color: '#888888', // Lighter, smaller text for the timestamp
    marginTop: 10,
    textAlign: 'right', // Align the timestamp to the right
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },
});

export default MessagesComponent;
