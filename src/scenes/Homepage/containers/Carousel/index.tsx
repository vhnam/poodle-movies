import { Flex } from '@chakra-ui/layout';

import { useTrending } from '../../../../queries/trending';

import Spinner from '../../../../components/Spinner';

import Carousel from '../../components/Carousel';

const CarouselContainer = () => {
  const { data, isLoading } = useTrending('all');

  if (isLoading) {
    <Flex alignItems="center" justifyContent="center">
      <Spinner />
    </Flex>;
  }

  return <div>{data && <Carousel data={data.results} />}</div>;
};

export default CarouselContainer;
