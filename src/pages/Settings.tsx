
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SettingsPage = () => {
  return (
    <>
      <PageHeader title="Configurações" subtitle="Gerencie as configurações da sua central." />
       <div className="flex-1 overflow-y-auto p-6">
        <Card>
            <CardHeader>
                <CardTitle>Em breve</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    As opções de configuração estarão disponíveis aqui.
                </p>
            </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SettingsPage;
