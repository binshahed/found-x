import { Navbar } from "@/src/components/navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
      <footer className="w-full flex items-center justify-center py-3"></footer>
    </div>
  );
};

export default layout;
