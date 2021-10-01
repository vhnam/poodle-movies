import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BiChevronDown } from "react-icons/bi";

import { Genre } from "../../types";

interface NavProps {
  movieList: Genre[];
  tvList: Genre[];
}

const Nav = ({ movieList, tvList }: NavProps) => (
  <Flex
    as="nav"
    alignItems="center"
    justifyContent="space-between"
    px="8"
    py="2"
  >
    <Box>
      <Text as="h1" fontSize="2xl" fontWeight="semibold">
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
            {tvList.map((item: Genre) => (
              <MenuItem key={item.id}>{item.name}</MenuItem>
            ))}
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
            {movieList.map((item: Genre) => (
              <MenuItem key={item.id}>{item.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Flex>
    <Box>&nbsp;</Box>
  </Flex>
);

export default Nav;
