import { useMemo } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';

import { Media } from '../../../../types';
import getImage from '../../../../utils/getImage';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';

interface CarouselItemProps {
  data: Media;
}

const CarouselItem = ({ data }: CarouselItemProps) => {
  const title = useMemo(
    () => data.title || data.name || data.original_title || data.original_name,
    [data]
  );

  const mediaLink = useMemo(() => `/${data.media_type}s/${data.id}`, [data]);

  return (
    <Box position="relative">
      <Image
        width="100%"
        height="40rem"
        src={getImage(data.backdrop_path)}
        alt={title}
        objectFit="cover"
        fallback={
          <Skeleton backgroundColor="teal.50" height="40rem" width="100%" />
        }
      />
      <Box position="absolute" left="8" top="50%">
        <Text
          fontSize="5xl"
          fontWeight="semibold"
          color="white"
          textShadow="-1px 1px 8px var(--chakra-colors-gray-700), 1px 1px 8px var(--chakra-colors-gray-700), 1px -1px 8px var(--chakra-colors-gray-700), -1px -1px 8px var(--chakra-colors-gray-700);"
        >
          {title}
        </Text>
        <Text
          maxWidth="35rem"
          fontSize="large"
          color="white"
          noOfLines={3}
          textShadow="-1px 1px 8px var(--chakra-colors-gray-700), 1px 1px 8px var(--chakra-colors-gray-700), 1px -1px 8px var(--chakra-colors-gray-700), -1px -1px 8px var(--chakra-colors-gray-700);"
        >
          {data.overview}
        </Text>
        <Button marginTop="4" colorScheme="teal" as={Link} to={mediaLink}>
          View detail
        </Button>
      </Box>
    </Box>
  );
};

export default CarouselItem;
