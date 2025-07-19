
import { Chat, operators } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Tag, Clock, Edit } from 'lucide-react';

interface ChatDetailsProps {
  chat: Chat;
}

const ChatDetails: React.FC<ChatDetailsProps> = ({ chat }) => {
  const operator = operators.find(op => op.id === chat.operatorId);

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 border-l p-6 bg-card hidden lg:flex flex-col gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-semibold">Detalhes do Cliente</CardTitle>
            <Button variant="ghost" size="icon" className="h-6 w-6"><Edit className="h-4 w-4" /></Button>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{chat.clientName}</span>
            </div>
            <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{chat.clientPhone}</span>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="text-md font-semibold">Informações do Atendimento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <h4 className="text-sm font-medium mb-2">Etiquetas</h4>
                <div className="flex flex-wrap gap-2">
                    {chat.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
            </div>
             <div>
                <h4 className="text-sm font-medium mb-2">Atendente Responsável</h4>
                {operator ? (
                    <div className="flex items-center gap-2">
                         <Avatar className="h-8 w-8">
                            <AvatarImage src={operator.avatarUrl} />
                            <AvatarFallback>{operator.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{operator.name}</span>
                    </div>
                ) : (
                    <span className="text-sm text-muted-foreground">Não atribuído</span>
                )}
            </div>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default ChatDetails;
