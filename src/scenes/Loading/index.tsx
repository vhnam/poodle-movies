import { Flex } from '@chakra-ui/layout';

import Spinner from '../../components/Spinner';

const Loading = () => (
  <Flex alignItems="center" justifyContent="center" minHeight="100vh">
    <Spinner />
  </Flex>
);

export default Loading;
