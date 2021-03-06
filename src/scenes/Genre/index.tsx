import { useCallback, useMemo, useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { useHistory, useParams } from 'react-router-dom';
import { concat, equals, find, ifElse, prop, propEq, propOr } from 'ramda';
import { useAtom } from 'jotai';
import { Helmet } from 'react-helmet';

import { Genre } from '../../types';

import { format } from '../../utils/number';
import { isEmptyOrNil } from '../../utils/ramda';
import { capitalize } from '../../utils/string';

import { useGenre } from '../../queries/genre';

import tvListAtom from '../../stores/tvList';
import movieListAtom from '../../stores/movieList';

import Header from './components/Header';
import MediaList from './components/MediaList';
import FilterBlock from './components/FilterBlock';

type GenreParams = {
  genreID: string;
  mediaType: 'movie' | 'tv';
};

const GenreList = () => {
  const { mediaType, genreID } = useParams<GenreParams>();
  const { push } = useHistory();

  const [page, setPage] = useState<number>(1);
  const [keywords, setKeywords] = useState<string>();

  const { data, isFetching, isLoading } = useGenre(
    mediaType,
    genreID,
    page,
    keywords
  );

  const [tvList] = useAtom(tvListAtom);
  const [movieList] = useAtom(movieListAtom);

  const title = useMemo(() => {
    const getList = ifElse(
      equals('movie'),
      () => movieList.genres,
      () => tvList.genres
    );

    const genre = find<Genre>(propEq('id', Number(genreID)))(
      getList(mediaType)
    );

    return concat(
      concat(capitalize(mediaType), ' - '),
      ifElse(isEmptyOrNil, () => 'Unknown', prop('name'))(genre)
    );
  }, [genreID, mediaType, movieList.genres, tvList.genres]);

  const totalResults = useMemo(
    () => format(propOr(0, 'total_results', data)),
    [data]
  );

  const totalPages = useMemo(
    () => format(propOr(0, 'total_pages', data)),
    [data]
  );

  const show = useCallback(
    (mediaID) => {
      push(`/${mediaType}s/${mediaID}`);
    },
    [mediaType, push]
  );

  return (
    <>
      <Helmet>
        <title>{title} &#8212; Poodle Movies</title>
      </Helmet>
      <Box>
        <Header title={`${title}`} content={`${totalResults} results found`} />
        <FilterBlock onSearch={setKeywords} />
        <MediaList
          isLoading={isLoading || isFetching}
          data={data?.results || []}
          totalPages={totalPages}
          setPage={setPage}
          show={show}
        />
      </Box>
    </>
  );
};

export default GenreList;
