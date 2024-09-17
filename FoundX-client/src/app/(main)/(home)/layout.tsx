import { ReactNode } from "react";

const layout = ({
  children,
  recentPost
}: {
  children: ReactNode;
  recentPost: ReactNode;
}) => {
  return (
    <>
      {children}
      {recentPost}
    </>
  );
};

export default layout;
