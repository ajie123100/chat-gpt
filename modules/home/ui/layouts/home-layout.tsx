import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HomeSidebar } from "../components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <div className="flex min-h-screen">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto flex flex-col">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
