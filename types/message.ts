// types/message.ts
export interface Message {
    id: string;
    sender: string;
    receiver: string;
    content: string;
    timestamp: Date;
    read: boolean;
  }
  