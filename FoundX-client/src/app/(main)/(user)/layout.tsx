import Container from "@/src/components/UI/Container";
import Sidebar from "@/src/components/UI/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="my-3 flex w-full gap-12">
        <div className="md:w-2/5 lg:w-2/5 w-full">
          <Sidebar />
        </div>
        <div className="md:w-4/5 lg:w-4/5 w-full">{children}</div>
      </div>
    </Container>
  );
};

export default layout;
