import { Dispatch, SetStateAction, useCallback } from 'react';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/transition';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FilterFormProps {
  keywords: string;
}

interface FilterBlockProps {
  onSearch: Dispatch<SetStateAction<string | undefined>>;
}

const FilterBlock = ({ onSearch }: FilterBlockProps) => {
  const { isOpen, onToggle } = useDisclosure();

  const { register, handleSubmit, reset } = useForm<FilterFormProps>();

  const _onSubmit: SubmitHandler<FilterFormProps> = (data) => {
    onSearch(data.keywords);
  };

  const onReset = useCallback(() => {
    reset({
      keywords: undefined,
    });
    onSearch(undefined);
  }, [onSearch, reset]);

  return (
    <Box marginBottom="6" mx="8">
      <Button colorScheme="blue" onClick={onToggle}>
        Filter
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <form onSubmit={handleSubmit(_onSubmit)}>
          <Flex mt="4" p="6" bg="white" shadow="base">
            <InputGroup size="md">
              <Input
                placeholder="Search for a movie, tv show, person......"
                {...register('keywords')}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" type="reset" onClick={onReset}>
                  Clear
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button marginLeft="4" colorScheme="teal" type="submit">
              Search
            </Button>
          </Flex>
        </form>
      </Collapse>
    </Box>
  );
};

export default FilterBlock;
