import { Box, Flex, Text } from '@chakra-ui/layout';

import { capitalize } from '../../../../utils/string';

import { useTrending } from '../../../../queries/trending';

import Spinner from '../../../../components/Spinner';
import Slider from '../../components/Slider';

interface CarouselContainerProps {
  mediaType: 'movie' | 'tv';
}

const CarouselContainer = ({ mediaType }: CarouselContainerProps) => {
  const { data, isLoading } = useTrending(mediaType);

  return (
    <Box marginBottom="8">
      <Text px="6" marginBottom="2" fontSize="lg" fontWeight="semibold">
        {capitalize(mediaType)} Trending
      </Text>
      {isLoading && (
        <Flex alignItems="center" justifyContent="center">
          <Spinner />
        </Flex>
      )}
      {data && <Slider mediaType={mediaType} data={data.results} />}
    </Box>
  );
};

export default CarouselContainer;
