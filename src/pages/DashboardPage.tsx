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
  HStack,
  SegmentGroup,
  Container,
} from '@chakra-ui/react';
import { FiSearch, } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import BoardView from '@/components/app/BoardView';
import { products } from '@/datas/products';
import { LuTable, LuGrid2X2 } from 'react-icons/lu';

const getStatusBadge = (status: string) => {
  const colorScheme = {
    Active: 'green',
    Draft: 'yellow',
    Archived: 'gray',
  }[status] || 'gray';

  return <Badge colorScheme={colorScheme}>{status}</Badge>;
};

const DashboardPage =()=> {
    const [viewMode, setViewMode] = useState('board');

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
                    <SegmentGroup.Root value={viewMode} onValueChange={(e) => setViewMode(e.value || 'board')}>
                        <SegmentGroup.Indicator />
                        <SegmentGroup.Items
                            items={[
                                 {
                                value: "board",
                                label: (
                                <HStack>
                                    <LuGrid2X2 />
                                    Board
                                </HStack>
                                ),
                            },
                            {
                                value: "table",
                                label: (
                                <HStack>
                                    <LuTable />
                                    Table
                                </HStack>
                                ),
                            },
                           
                            ]}
                        />
                        </SegmentGroup.Root>

                    <Button colorScheme="blue">Add Product</Button>
                </Flex>
            </Flex>

            {/* Table */}
            {viewMode === 'table' && (
                <Container display={"flex"} flexDirection="column" gap="4" p={0}>
                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" overflowX="auto">
                        <Table.ScrollArea borderWidth="1px" rounded="md" h={"330px"}>
                            <Table.Root size="sm" stickyHeader>
                                <Table.Header>
                                    <Table.Row bg="bg.subtle">
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
                        </Table.ScrollArea>
                    </Box>

                    {/* Footer */}
                    <Flex justify="space-between" align="center" fontSize="sm" color="gray.500">
                        <Text>Showing 8 of 8 products</Text>
                        <Flex gap="2">
                            <Button size="sm" variant="outline">Previous</Button>
                            <Button size="sm" variant="outline">Next</Button>
                        </Flex>
                    </Flex>
                </Container>
            )}

            {viewMode === 'board' && <BoardView />}
        </Box>
    );
}
export default DashboardPage;