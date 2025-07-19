
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <p className="text-2xl font-semibold mt-4">Oops! Página não encontrada</p>
      <p className="text-muted-foreground mt-2">A página que você está procurando não existe ou foi movida.</p>
      <Button asChild className="mt-6">
        <Link to="/">Voltar para o Dashboard</Link>
      </Button>
    </div>
  );
};

export default NotFound;
