import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

import { Trend } from "../../../../types";
import getImage from "../../../../utils/getImage";

interface CarouselItemProps {
  data: Trend;
}

const CarouselItem = ({ data }: CarouselItemProps) => (
  <Box position="relative">
    <Image
      width="100%"
      height="40rem"
      src={getImage(data.backdrop_path)}
      alt={data.title}
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
        {data.title || data.name || data.original_title || data.original_name}
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
    </Box>
  </Box>
);

export default CarouselItem;
