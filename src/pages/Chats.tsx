
import { useState } from 'react';
import { chats } from '@/lib/mock-data';
import ChatList from '@/components/ChatList';
import ChatWindow from '@/components/ChatWindow';
import ChatDetails from '@/components/ChatDetails';
import { MessageSquare } from 'lucide-react';

const ChatsPage = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(chats[0]?.id || null);

  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  return (
    <div className="flex flex-1 overflow-hidden h-screen">
      <ChatList selectedChatId={selectedChatId} onSelectChat={setSelectedChatId} />
      {selectedChat ? (
        <>
          <ChatWindow chat={selectedChat} />
          <ChatDetails chat={selectedChat} />
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-4 bg-muted/20">
          <MessageSquare className="h-16 w-16 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">Selecione uma conversa</h2>
          <p className="mt-1 text-muted-foreground">Escolha uma conversa na lista à esquerda para começar.</p>
        </div>
      )}
    </div>
  );
};

export default ChatsPage;
