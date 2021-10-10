import { Box, Text } from '@chakra-ui/layout';

interface HeaderProps {
  title: string;
  content: string;
}

const Header = ({ title, content }: HeaderProps) => (
  <Box padding="8">
    <Text
      fontSize="2xl"
      fontWeight="bold"
      color="gray.700"
      letterSpacing="0.0625rem"
    >
      {title}
    </Text>
    <Text fontSize="sm" color="gray.500">
      {content}
    </Text>
  </Box>
);

export default Header;
