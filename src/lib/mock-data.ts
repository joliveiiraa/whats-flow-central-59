
export type Operator = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type Message = {
  id: string;
  text: string;
  timestamp: string;
  sender: 'user' | 'operator';
  operatorId?: string;
};

export type Chat = {
  id: string;
  clientName: string;
  clientPhone: string;
  status: 'active' | 'waiting' | 'closed';
  tags: string[];
  operatorId: string | null;
  lastMessage: string;
  lastMessageTimestamp: string;
  messages: Message[];
};

export const operators: Operator[] = [
  { id: 'op1', name: 'Ana Silva', avatarUrl: 'https://i.pravatar.cc/150?u=op1' },
  { id: 'op2', name: 'Bruno Costa', avatarUrl: 'https://i.pravatar.cc/150?u=op2' },
  { id: 'op3', name: 'Carla Dias', avatarUrl: 'https://i.pravatar.cc/150?u=op3' },
];

export const chats: Chat[] = [
  {
    id: 'chat1',
    clientName: 'Mariana Lima',
    clientPhone: '+55 11 98765-4321',
    status: 'active',
    tags: ['Suporte', 'VIP'],
    operatorId: 'op1',
    lastMessage: 'Ok, muito obrigada pela ajuda!',
    lastMessageTimestamp: '10:45',
    messages: [
      { id: 'msg1-1', text: 'Olá, preciso de ajuda com meu pedido #1234.', sender: 'user', timestamp: '10:40' },
      { id: 'msg1-2', text: 'Claro, Mariana! Só um momento enquanto verifico.', sender: 'operator', operatorId: 'op1', timestamp: '10:41' },
      { id: 'msg1-3', text: 'Seu pedido já foi enviado e chegará amanhã.', sender: 'operator', operatorId: 'op1', timestamp: '10:44' },
      { id: 'msg1-4', text: 'Ok, muito obrigada pela ajuda!', sender: 'user', timestamp: '10:45' },
    ],
  },
  {
    id: 'chat2',
    clientName: 'João Pereira',
    clientPhone: '+55 21 91234-5678',
    status: 'waiting',
    tags: ['Comercial'],
    operatorId: null,
    lastMessage: 'Gostaria de saber mais sobre o plano Pro.',
    lastMessageTimestamp: '10:30',
    messages: [
       { id: 'msg2-1', text: 'Gostaria de saber mais sobre o plano Pro.', sender: 'user', timestamp: '10:30' },
    ],
  },
  {
    id: 'chat3',
    clientName: 'Fernanda Souza',
    clientPhone: '+55 31 99999-8888',
    status: 'closed',
    tags: ['Financeiro'],
    operatorId: 'op2',
    lastMessage: 'Perfeito, problema resolvido!',
    lastMessageTimestamp: 'Ontem',
     messages: [
      { id: 'msg3-1', text: 'Não consigo gerar minha fatura.', sender: 'user', timestamp: 'Ontem' },
      { id: 'msg3-2', text: 'Fernanda, já reenviei para seu e-mail.', sender: 'operator', operatorId: 'op2', timestamp: 'Ontem' },
       { id: 'msg3-3', text: 'Perfeito, problema resolvido!', sender: 'user', timestamp: 'Ontem' },
    ],
  },
    {
    id: 'chat4',
    clientName: 'Ricardo Alves',
    clientPhone: '+55 81 98877-6655',
    status: 'active',
    tags: ['Suporte'],
    operatorId: 'op1',
    lastMessage: 'Onde posso rastrear meu produto?',
    lastMessageTimestamp: '11:02',
    messages: [
       { id: 'msg4-1', text: 'Onde posso rastrear meu produto?', sender: 'user', timestamp: '11:02' },
    ],
  },
];
