import { ReactNode } from 'react';

import { Genre } from '../../types';

import Footer from '../Footer';
import Nav from '../Nav';

interface LayoutProps {
  children: ReactNode;
  movieList: Genre[];
  tvList: Genre[];
}

const Layout = ({ children, movieList, tvList }: LayoutProps) => (
  <>
    <Nav movieList={movieList} tvList={tvList} />
    {children}
    <Footer />
  </>
);

export default Layout;
