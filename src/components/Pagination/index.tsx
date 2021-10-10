import { IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";

interface PaginationProps {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  pageOptions: number[];
  previousPage: () => void;
  nextPage: () => void;
  gotoPage: (page: number) => void;
}

const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageOptions,
  previousPage,
  nextPage,
  gotoPage,
}: PaginationProps) => (
  <Flex alignItems="center" justifyContent="flex-end" marginTop="4">
    <Flex>
      <Flex alignItems="center" marginRight="6">
        <Text marginRight="2" fontSize="sm">
          Go to
        </Text>
        <Input
          width="16"
          size="sm"
          type="number"
          backgroundColor="white"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          disabled={0 === pageOptions.length}
        />
      </Flex>
      <Flex alignItems="center" mx="-0.5">
        <IconButton
          aria-label="First page"
          icon={<BiChevronsLeft />}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          variant="ghost"
          mx="0.5"
        />
        <IconButton
          aria-label="First page"
          icon={<BiChevronLeft />}
          onClick={previousPage}
          disabled={!canPreviousPage}
          variant="outline"
          mx="0.5"
        />
        <Text mx="2" fontSize="sm">
          {pageIndex + 1} of {pageCount}
        </Text>
        <IconButton
          aria-label="Next page"
          icon={<BiChevronRight />}
          onClick={nextPage}
          disabled={!canNextPage}
          variant="outline"
          mx="0.5"
        />
        <IconButton
          aria-label="Last page"
          icon={<BiChevronsRight />}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          variant="outline"
          mx="0.5"
        />
      </Flex>
    </Flex>
  </Flex>
);

export default Pagination;
