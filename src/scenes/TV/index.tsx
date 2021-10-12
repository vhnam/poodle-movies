import { useCallback, useMemo } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { useParams } from 'react-router';
import { join, map, trim } from 'ramda';

import { useTV } from '../../queries/tv';
import { useSimilarTVs } from '../../queries/similarTVs';

import Loading from '../Loading';

import Background from '../../components/Background';
import MediaDetail from '../../components/MediaDetail';
import SimilarMedia from '../../components/SimilarMedia';
import Metadata from '../../components/Metadata';

type TVPageParams = {
  tvID: string;
};

const TVPage = () => {
  const { tvID } = useParams<TVPageParams>();

  const { data: tv, isFetchedAfterMount: isFetchedTV } = useTV(tvID);
  const { data: similarTVs, isFetchedAfterMount: isFetchedSimilarTVs } =
    useSimilarTVs(tvID);

  const shouldRender = useMemo(
    () => isFetchedTV && isFetchedSimilarTVs,
    [isFetchedTV, isFetchedSimilarTVs]
  );

  const genres = useMemo(() => {
    if (tv) {
      return trim(
        join(
          ', ',
          map((genre) => genre.name, tv.genres)
        )
      );
    }
    return '';
  }, [tv]);

  const title = useMemo(
    () => (tv ? tv.name || tv.original_name : 'Unknown'),
    [tv]
  );

  const overview = useMemo(() => (tv ? tv.overview : 'Unknown'), [tv]);

  const render = useCallback(() => {
    if (tv && similarTVs && shouldRender) {
      return (
        <Box position="relative">
          <Background title={tv.name} backdrop_path={tv.backdrop_path} />
          <Flex position="absolute" top="0" bottom="0" alignItems="center">
            <Box px="40">
              <MediaDetail
                mediaType="tv"
                poster={tv.poster_path}
                title={title}
                overview={overview}
                genres={genres}
                seasons={tv.number_of_seasons}
                episodes={tv.number_of_episodes}
              />

              <SimilarMedia mediaType="tvs" media={similarTVs.results} />
            </Box>
          </Flex>
        </Box>
      );
    }

    return <Loading />;
  }, [genres, tv, shouldRender, similarTVs, title, overview]);

  return (
    <>
      <Metadata title={title} overview={overview} genres={genres} />
      {render()}
    </>
  );
};

export default TVPage;
