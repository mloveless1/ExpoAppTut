// hooks/useMessages.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Message } from '../types/message';

const useFetchMessages = (receiverId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get<Message[]>(`http://localhost:5000/messages/${receiverId}`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [receiverId]);

  return { messages, loading, error };
};

export default useFetchMessages;
