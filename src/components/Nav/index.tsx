import { Button } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { BiChevronDown } from 'react-icons/bi';
import { map } from 'ramda';
import { Link } from 'react-router-dom';

import config from '../../config';
import { Genre } from '../../types';

interface NavProps {
  movieList: Genre[];
  tvList: Genre[];
}

const Nav = ({ movieList, tvList }: NavProps) => (
  <Flex
    as="nav"
    alignItems="center"
    justifyContent="space-between"
    height="3.75rem"
    px="8"
  >
    <Box>
      <Text
        as={Link}
        to={config.paths.homepage}
        fontSize="2xl"
        fontWeight="semibold"
        color="teal.500"
      >
        Poodle
      </Text>
    </Box>
    <Flex>
      <Box mx="2">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<BiChevronDown />}
            backgroundColor="transparent"
          >
            TV Series
          </MenuButton>
          <MenuList>
            {map(
              (item: Genre) => (
                <MenuItem as={Link} key={item.id} to={`/genres/tv/${item.id}`}>
                  {item.name}
                </MenuItem>
              ),
              tvList
            )}
          </MenuList>
        </Menu>
      </Box>
      <Box mx="2">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<BiChevronDown />}
            backgroundColor="transparent"
          >
            Movies
          </MenuButton>
          <MenuList>
            {map(
              (item: Genre) => (
                <MenuItem
                  as={Link}
                  key={item.id}
                  to={`/genres/movie/${item.id}`}
                >
                  {item.name}
                </MenuItem>
              ),
              movieList
            )}
          </MenuList>
        </Menu>
      </Box>
    </Flex>
    <Box>&nbsp;</Box>
  </Flex>
);

export default Nav;
