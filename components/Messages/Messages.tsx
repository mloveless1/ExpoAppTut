// components/MessagesComponent.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import useMessages from '../../hooks/useFetchMessages';
import { Message } from '../../types/message';

const MessagesComponent: React.FC = () => {
  const { messages, loading, error } = useMessages();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching messages: {error.message}</Text>;
  }

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    messageContainer: {
      backgroundColor: '#fff',
      margin: 10,
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    sender: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
      color: '#333',
    },
    content: {
      fontSize: 14,
      color: '#555',
      marginBottom: 5,
    },
    timestamp: {
      fontSize: 12,
      color: '#999',
      textAlign: 'right',
      marginTop: 10,
    },
    flatList: {
      flex: 1,
    },
    errorText: {
      color: 'red',
      fontSize: 16,
      textAlign: 'center',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={renderMessage}
    />
  );
};


export default MessagesComponent;
