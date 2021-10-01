import { useMemo } from "react";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { Tooltip } from "@chakra-ui/react";

import { Trend } from "../../../../types";
import getImage from "../../../../utils/getImage";

interface SliderItemProps {
  data: Trend;
}

const SliderItem = ({ data }: SliderItemProps) => {
  const title = useMemo(
    () => data.title || data.name || data.original_title || data.original_name,
    [data]
  );

  return (
    <Box boxShadow="base" margin="1" maxHeight="7.5rem">
      <Tooltip label={title}>
        <Image
          width="100%"
          height="100%"
          src={getImage(data.backdrop_path)}
          alt={title}
          objectFit="cover"
          fallback={
            <Skeleton backgroundColor="teal.50" height="40rem" width="100%" />
          }
        />
      </Tooltip>
    </Box>
  );
};

export default SliderItem;
