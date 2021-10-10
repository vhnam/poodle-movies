import { ReactNode } from 'react';
import { useAtom } from 'jotai';

import movieListAtom from '../../stores/movieList';
import tvListAtom from '../../stores/tvList';

import { Genre } from '../../types';

interface AppContainerProps {
  children: (movieList: Genre[], tvList: Genre[]) => ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  const [tvList] = useAtom(tvListAtom);
  const [movieList] = useAtom(movieListAtom);

  return <>{children(movieList.genres, tvList.genres)}</>;
};

export default AppContainer;
