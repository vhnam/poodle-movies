import { useCallback, useMemo } from 'react';
import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Tooltip } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { Media } from '../../../../types';
import getImage from '../../../../utils/getImage';

interface SliderItemProps {
  data: Media;
  mediaType: 'movie' | 'tv';
}

const SliderItem = ({ data, mediaType }: SliderItemProps) => {
  const { push } = useHistory();

  const title = useMemo(
    () => data.title || data.name || data.original_title || data.original_name,
    [data]
  );

  const show = useCallback(
    (mediaID) => {
      push(`/${mediaType}s/${mediaID}`);
    },
    [mediaType, push]
  );

  return (
    <Box boxShadow="base" margin="1" maxHeight="7.5rem" overflow="hidden">
      <Tooltip label={title}>
        <Image
          width="100%"
          height="100%"
          src={getImage(data.backdrop_path)}
          alt={title}
          objectFit="cover"
          transition="transform 300ms"
          fallback={
            <Skeleton backgroundColor="teal.50" height="40rem" width="100%" />
          }
          onClick={() => show(data.id)}
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.1)',
          }}
        />
      </Tooltip>
    </Box>
  );
};

export default SliderItem;
