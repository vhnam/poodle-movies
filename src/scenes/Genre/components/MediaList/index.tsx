import { useCallback, useEffect, useMemo } from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { useTable, usePagination } from 'react-table';

import { format } from '../../../../utils/number';

import { Media } from '../../../../types';

import Pagination from '../../../../components/Pagination';
import Spinner from '../../../../components/Spinner';

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE) || 20;

interface MediaListProps {
  data: Media[];
  isLoading: boolean;
  totalPages: string;
  setPage: (page: number) => void;
  show: (mediaID: number) => void;
}

const MediaList = ({
  data,
  isLoading,
  totalPages,
  setPage,
  show,
}: MediaListProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: (originalRow: Media) => (
          <Text fontSize="sm">
            {originalRow.title ||
              originalRow.name ||
              originalRow.original_title ||
              originalRow.original_name}
          </Text>
        ),
      },
      {
        Header: 'Overview',
        accessor: (originalRow: Media) => (
          <Text fontSize="sm">{originalRow.overview}</Text>
        ),
      },
      {
        Header: 'Popularity',
        accessor: (originalRow: Media) => (
          <Text fontSize="sm">{format(originalRow.popularity)}</Text>
        ),
      },
      {
        Header: 'Vote Average',
        accessor: (originalRow: Media) => (
          <Text fontSize="sm">{originalRow.vote_average}</Text>
        ),
      },
      {
        Header: 'Vote Count',
        accessor: (originalRow: Media) => (
          <Text fontSize="sm">{format(originalRow.vote_count)}</Text>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: PAGE_SIZE,
      },
      manualPagination: true,
      pageCount: Number(totalPages),
    },
    usePagination
  );

  const render = useCallback(() => {
    if (isLoading) {
      return (
        <Tr>
          <Td colSpan={columns.length} textAlign="center">
            <Spinner />
          </Td>
        </Tr>
      );
    } else {
      return page.map((row) => {
        prepareRow(row);

        return (
          <Tr
            {...row.getRowProps()}
            onClick={() => show(row.original.id)}
            _hover={{
              cursor: 'pointer',
              backgroundColor: 'cyan.50',
              filter: 'contrast(0.9)',
            }}
          >
            {row.cells.map((cell) => (
              <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
            ))}
          </Tr>
        );
      });
    }
  }, [columns.length, isLoading, page, prepareRow, show]);

  useEffect(() => {
    setPage(pageIndex + 1);
  }, [pageIndex, setPage]);

  return (
    <>
      <Box mx="8" boxShadow="base">
        <Table
          variant={page.length ? 'striped' : 'simple'}
          {...getTableProps()}
        >
          <colgroup>
            <col width="15%" />
            <col width="50%" />
          </colgroup>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    position="sticky"
                    top="0"
                    backgroundColor="white"
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>{render()}</Tbody>
        </Table>
      </Box>

      <Box marginTop="6" mx="8">
        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          previousPage={previousPage}
          nextPage={nextPage}
          gotoPage={gotoPage}
        />
      </Box>
    </>
  );
};

export default MediaList;
