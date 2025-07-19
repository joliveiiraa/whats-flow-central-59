
import { Chat, operators } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Paperclip, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatWindowProps {
  chat: Chat;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat }) => {
  const getOperator = (operatorId: string | null) => {
    return operators.find(op => op.id === operatorId);
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="p-4 border-b flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{chat.clientName}</h3>
          <p className="text-xs text-muted-foreground">{chat.clientPhone}</p>
        </div>
        {/* Adicionar ações aqui (ex: fechar chat) */}
      </header>
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-muted/20">
        {chat.messages.map((message) => {
          const isUser = message.sender === 'user';
          const operator = !isUser ? getOperator(message.operatorId!) : null;
          return (
            <div key={message.id} className={cn("flex items-end gap-2", isUser ? "justify-start" : "justify-end")}>
              {isUser && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${chat.clientPhone}`} />
                  <AvatarFallback>{chat.clientName.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-md p-3 rounded-lg",
                  isUser ? "bg-card" : "bg-primary text-primary-foreground"
                )}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70 text-right">{message.timestamp}</p>
              </div>
              {!isUser && operator && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={operator.avatarUrl} />
                  <AvatarFallback>{operator.name.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
            </div>
          );
        })}
      </div>
      <footer className="p-4 border-t bg-card">
        <div className="flex items-center gap-2">
          <Input placeholder="Digite sua mensagem..." className="flex-1" />
          <Button variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default ChatWindow;
