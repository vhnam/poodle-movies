import { Image } from '@chakra-ui/image';
import { Box, Divider, Flex, Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';

import getImage from '../../utils/getImage';

interface MediaDetailProps {
  duration: string;
  genres: string;
  title: string;
  overview: string;
  poster: string;
}

const MediaDetail = ({
  duration,
  genres,
  title,
  overview,
  poster,
}: MediaDetailProps) => (
  <Flex>
    <Image
      height="20rem"
      src={getImage(poster)}
      alt={title}
      fallback={
        <Skeleton
          maxWidth="13.3125rem"
          maxHeight="20rem"
          backgroundColor="teal.50"
          height="40rem"
          width="100%"
        />
      }
    />
    <Box paddingLeft="8">
      <Text
        fontSize="1.875rem"
        fontWeight="semibold"
        textShadow="-1px 1px 8px #fff, 1px 1px 8px #fff, 1px -1px 8px #fff, -1px -1px 8px #fff;"
      >
        {title}
      </Text>
      <Text
        as="span"
        textShadow="-1px 1px 8px #fff, 1px 1px 8px #fff, 1px -1px 8px #fff, -1px -1px 8px #fff;"
      >
        {duration}
      </Text>
      <Text
        as="span"
        px="6"
        textShadow="-1px 1px 8px #fff, 1px 1px 8px #fff, 1px -1px 8px #fff, -1px -1px 8px #fff;"
      >
        {genres}
      </Text>
      <Divider my="2" borderColor="gray.500" />
      <Text
        fontWeight="medium"
        textShadow="-1px 1px 8px #fff, 1px 1px 8px #fff, 1px -1px 8px #fff, -1px -1px 8px #fff;"
      >
        {overview}
      </Text>
    </Box>
  </Flex>
);

export default MediaDetail;
