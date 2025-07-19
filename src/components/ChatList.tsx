
import { chats, Chat } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ChatListProps {
  selectedChatId: string | null;
  onSelectChat: (id: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ selectedChatId, onSelectChat }) => {
  const getStatusColor = (status: Chat['status']) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'waiting': return 'bg-yellow-500';
      case 'closed': return 'bg-gray-400';
    }
  };

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 border-r flex flex-col">
       <div className="p-4 border-b">
         <h2 className="text-lg font-semibold">Conversas</h2>
         {/* Adicionar filtros aqui no futuro */}
       </div>
       <div className="flex-1 overflow-y-auto">
         {chats.map((chat) => (
           <div
             key={chat.id}
             onClick={() => onSelectChat(chat.id)}
             className={cn(
               "flex items-start gap-4 p-4 border-b cursor-pointer hover:bg-muted",
               selectedChatId === chat.id && "bg-secondary"
             )}
           >
             <div className="relative">
                <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${chat.clientPhone}`} />
                    <AvatarFallback>{chat.clientName.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ${getStatusColor(chat.status)} border-2 border-card`} />
             </div>
             <div className="flex-1 overflow-hidden">
               <div className="flex justify-between items-center">
                 <h3 className="font-semibold truncate">{chat.clientName}</h3>
                 <span className="text-xs text-muted-foreground">{chat.lastMessageTimestamp}</span>
               </div>
               <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
};

export default ChatList;
