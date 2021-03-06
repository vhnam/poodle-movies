import { useCallback, useMemo } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { useParams } from 'react-router';
import { join, map, trim } from 'ramda';

import getDuration from '../../utils/getDuration';

import { useMovie } from '../../queries/movie';
import { useSimilarMovies } from '../../queries/similarMovies';

import Loading from '../Loading';

import Background from '../../components/Background';
import MediaDetail from '../../components/MediaDetail';
import SimilarMedia from '../../components/SimilarMedia';
import Metadata from '../../components/Metadata';

type MoviePageParams = {
  movieID: string;
};

const MoviePage = () => {
  const { movieID } = useParams<MoviePageParams>();

  const { data: movie, isFetchedAfterMount: isFetchedMovie } =
    useMovie(movieID);
  const { data: similarMovies, isFetchedAfterMount: isFetchedSimilarMovies } =
    useSimilarMovies(movieID);

  const genres = useMemo(() => {
    if (movie) {
      return trim(
        join(
          ', ',
          map((genre) => genre.name, movie.genres)
        )
      );
    }
    return '';
  }, [movie]);

  const shouldRender = useMemo(
    () => isFetchedMovie && isFetchedSimilarMovies,
    [isFetchedMovie, isFetchedSimilarMovies]
  );

  const title = useMemo(
    () => (movie ? movie.title || movie.original_title : 'Unknown'),
    [movie]
  );

  const overview = useMemo(() => (movie ? movie.overview : 'Unknown'), [movie]);

  const render = useCallback(() => {
    if (movie && similarMovies && shouldRender) {
      return (
        <Box position="relative">
          <Background title={movie.title} backdrop_path={movie.backdrop_path} />
          <Flex position="absolute" top="0" bottom="0" alignItems="center">
            <Box px="40">
              <MediaDetail
                mediaType="movie"
                poster={movie.poster_path}
                title={title}
                overview={overview}
                genres={genres}
                duration={getDuration(movie.runtime)}
              />

              <SimilarMedia mediaType="movies" media={similarMovies.results} />
            </Box>
          </Flex>
        </Box>
      );
    }

    return <Loading />;
  }, [genres, movie, shouldRender, similarMovies, title, overview]);

  return (
    <>
      <Metadata title={title} overview={overview} genres={genres} />
      {render()}
    </>
  );
};

export default MoviePage;
