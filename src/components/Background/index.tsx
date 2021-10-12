import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';

import getImage from '../../utils/getImage';

interface HeroProps {
  title: string;
  backdrop_path: string;
}

const Background = ({ backdrop_path, title }: HeroProps) => (
  <Box position="relative" height="calc(100vh - 8.125rem)">
    <Image
      width="100%"
      height="100%"
      src={getImage(backdrop_path)}
      alt={title}
      objectFit="cover"
      opacity="0.55"
      fallback={
        <Skeleton backgroundColor="teal.50" height="40rem" width="100%" />
      }
    />
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundImage="linear-gradient(to top, #fff, rgba(0,0,0,0.15), #fff)"
    />
  </Box>
);

export default Background;
