import { memo, useCallback, useMemo } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Tooltip } from '@chakra-ui/tooltip';
import { map, pipe } from 'ramda';
import { useHistory } from 'react-router';

import { Media } from '../../types';

import getImage from '../../utils/getImage';
import getSimilarMedia from '../../utils/getSimilarMedia';

interface SimilarMediaProps {
  mediaType: string;
  media: Media[];
}

const SimilarMedia = ({ mediaType, media }: SimilarMediaProps) => {
  const { push } = useHistory();

  const title = useMemo(() => `Similar ${mediaType}`, [mediaType]);

  const show = useCallback(
    (mediaID) => {
      push(`/${mediaType}/${mediaID}`);
    },
    [mediaType, push]
  );

  const render = useMemo(
    () =>
      pipe(
        getSimilarMedia,
        map((item) => (
          <Box px="4" key={item.id} onClick={() => show(item.id)}>
            <Tooltip
              label={
                item.title ||
                item.name ||
                item.original_title ||
                item.original_name
              }
            >
              <Image
                src={getImage(item.backdrop_path)}
                alt={title}
                objectFit="cover"
                transition="transform 300ms"
                fallback={
                  <Skeleton
                    backgroundColor="teal.50"
                    height="10rem"
                    width="100%"
                  />
                }
                _hover={{
                  cursor: 'pointer',
                  transform: 'scale(1.1)',
                }}
              />
            </Tooltip>
          </Box>
        ))
      ),
    [title, show]
  );

  return (
    <Box marginTop="1.5rem">
      <Text
        fontSize="1.5rem"
        fontWeight="semibold"
        textShadow="-1px 1px 8px #fff, 1px 1px 8px #fff, 1px -1px 8px #fff, -1px -1px 8px #fff;"
      >
        {title}
      </Text>
      <SimpleGrid columns={4} mx="-4" marginTop="1.5rem">
        {render(media)}
      </SimpleGrid>
    </Box>
  );
};

export default memo(SimilarMedia);
