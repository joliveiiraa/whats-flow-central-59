
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Bell, Cog, Home, MessageSquare, PieChart, User, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/chats', label: 'Atendimentos', icon: MessageSquare, badge: '2' },
  { href: '/reports', label: 'Relatórios', icon: PieChart },
  { href: '/settings', label: 'Configurações', icon: Cog },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 flex-col border-r bg-card text-card-foreground p-4 hidden md:flex">
      <div className="flex items-center gap-2 mb-8">
        <div className="p-2 bg-primary rounded-lg">
          <MessageSquare className="text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold">AtendeZap</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            asChild
            variant={location.pathname === item.href ? 'secondary' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Link to={item.href}>
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.badge && <Badge className="ml-auto">{item.badge}</Badge>}
            </Link>
          </Button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="p-4 rounded-lg bg-muted flex flex-col items-center text-center">
            <h3 className="font-semibold">Plano Pro</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-3">
                Atualize para ter acesso a mais funcionalidades.
            </p>
            <Button size="sm" className="w-full">Upgrade</Button>
        </div>

        <div className="flex items-center gap-3 mt-4 pt-4 border-t">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-semibold text-sm">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@example.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
