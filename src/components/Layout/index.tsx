import { ReactNode } from "react";
import { Genre } from "../../types";

import Nav from "../Nav";

interface LayoutProps {
  children: ReactNode;
  movieList: Genre[];
  tvList: Genre[];
}

const Layout = ({ children, movieList, tvList }: LayoutProps) => {
  return (
    <>
      <Nav movieList={movieList} tvList={tvList} />
      {children}
    </>
  );
};

export default Layout;
