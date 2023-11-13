// hooks/useMessages.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Message } from '../types/message';

const useFetchMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get<Message[]>('http://localhost:5000/messages/${receiver_id}')
      .then(response => {
        setMessages(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Functions for add, update, delete can be added here

  return { messages, loading, error, setMessages }; // Include setMessages for external manipulation
};

export default useFetchMessages;
