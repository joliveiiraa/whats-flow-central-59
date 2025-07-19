
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ReportsPage = () => {
  return (
    <>
      <PageHeader title="Relatórios" subtitle="Analise a performance da sua equipe." />
      <div className="flex-1 overflow-y-auto p-6">
        <Card>
            <CardHeader>
                <CardTitle>Em breve</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    A funcionalidade de relatórios detalhados estará disponível em breve.
                </p>
            </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ReportsPage;
