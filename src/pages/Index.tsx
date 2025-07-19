
import PageHeader from '@/components/PageHeader';
import MetricCard from '@/components/MetricCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, Clock, CheckCircle, PlusCircle } from 'lucide-react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Seg', atendimentos: 30 },
  { name: 'Ter', atendimentos: 45 },
  { name: 'Qua', atendimentos: 60 },
  { name: 'Qui', atendimentos: 50 },
  { name: 'Sex', atendimentos: 75 },
  { name: 'Sáb', atendimentos: 40 },
  { name: 'Dom', atendimentos: 20 },
];

const Dashboard = () => {
  return (
    <>
      <PageHeader title="Dashboard" subtitle="Bem-vindo de volta, Admin!">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Atendimento
        </Button>
      </PageHeader>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Atendimentos Ativos" value="12" change="+3 hoje" icon={MessageSquare} />
          <MetricCard title="Aguardando Atendimento" value="5" icon={Clock} />
          <MetricCard title="Atendimentos Finalizados" value="128" change="+20 ontem" icon={CheckCircle} />
          <MetricCard title="Operadores Online" value="3/5" icon={Users} />
        </div>
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Visão Geral de Atendimentos</CardTitle>
              <CardDescription>Atendimentos finalizados nos últimos 7 dias.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        background: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="atendimentos" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
