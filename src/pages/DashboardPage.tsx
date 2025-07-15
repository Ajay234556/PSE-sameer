import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  Spacer,
  Text,
  Badge,
  Table,
} from '@chakra-ui/react';
import { FiSearch, FiFilter, FiTable, FiLayout } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import BoardView from '@/components/app/BoardView';
import { products } from '@/datas/products';

const getStatusBadge = (status: string) => {
  const colorScheme = {
    Active: 'green',
    Draft: 'yellow',
    Archived: 'gray',
  }[status] || 'gray';

  return <Badge colorScheme={colorScheme}>{status}</Badge>;
};

const DashboardPage =()=> {
    const [viewMode, setViewMode] = useState<'table' | 'board'>('table');

    return (
        <Box>
            <Heading fontSize="2xl" mb="1">
                Project List
            </Heading>
            <Text fontSize="sm" color="gray.500" mb="4">
                Manage and track all your products
            </Text>

            {/* Top Controls */}
            <Flex mb="4" gap="4" wrap="wrap">
                <InputGroup startElement={<FiSearch />} maxW="400px">
                <Input placeholder="Search products..." />
                </InputGroup>

                <Spacer />

                <Flex gap="2">
                    <IconButton aria-label="Filter">
                        <FiFilter />
                    </IconButton>

                    <IconButton aria-label="Table View"
                        onClick={() => setViewMode('table')}
                        colorScheme={viewMode === 'table' ? 'blue' : 'gray'}
                    >
                        <FiTable />
                    </IconButton>

                    <IconButton aria-label="Board View" 
                        onClick={() => setViewMode('board')}
                        colorScheme={viewMode === 'board' ? 'blue' : 'gray'}
                    >
                        <FiLayout />
                    </IconButton>

                    <Button colorScheme="blue">Add Product</Button>
                </Flex>
            </Flex>

            {/* Table */}
            {viewMode === 'table' && (
                <>
                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" overflowX="auto">
                        <Table.Root>
                            <Table.Header bg="gray.50">
                            <Table.Row>
                                <Table.ColumnHeader>ID</Table.ColumnHeader>
                                <Table.ColumnHeader>Product Name</Table.ColumnHeader>
                                <Table.ColumnHeader>Status</Table.ColumnHeader>
                                <Table.ColumnHeader>Last Updated</Table.ColumnHeader>
                                <Table.ColumnHeader>Owner</Table.ColumnHeader>
                                <Table.ColumnHeader />
                            </Table.Row>
                            </Table.Header>

                            <Table.Body>
                            {products.map((product) => (
                                <Table.Row key={product.id}>
                                <Table.Cell color="blue.600" fontWeight="medium">{product.id}</Table.Cell>
                                <Table.Cell>{product.name}</Table.Cell>
                                <Table.Cell>{getStatusBadge(product.status)}</Table.Cell>
                                <Table.Cell>{product.updated}</Table.Cell>
                                <Table.Cell>{product.owner}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <IconButton aria-label="More actions" variant="ghost"
                                    size="sm">
                                        <BsThreeDotsVertical />
                                    </IconButton>
                                </Table.Cell>
                                </Table.Row>
                            ))}
                            </Table.Body>
                        </Table.Root>
                    </Box>

                    {/* Footer */}
                    <Flex justify="space-between" align="center" mt="4" fontSize="sm" color="gray.500">
                        <Text>Showing 8 of 8 products</Text>
                        <Flex gap="2">
                            <Button size="sm" variant="outline">Previous</Button>
                            <Button size="sm" variant="outline">Next</Button>
                        </Flex>
                    </Flex>
                </>
            )}

            {viewMode === 'board' && <BoardView />}
        </Box>
    );
}
export default DashboardPage;