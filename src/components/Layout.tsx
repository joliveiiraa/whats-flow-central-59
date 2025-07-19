
import React from 'react';
import AppSidebar from '@/components/AppSidebar';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Toaster />
      <Sonner />
    </div>
  );
};

export default Layout;
