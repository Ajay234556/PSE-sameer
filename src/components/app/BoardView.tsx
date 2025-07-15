import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
  Badge,
  VStack
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { products } from '@/datas/products'; // import your product list from shared location

interface Product {
  id: string;
  name: string;
  status: 'Active' | 'Draft' | 'Archived';
  updated: string;
  owner: string;
}

const getStatusBadge = (status: string) => {
  const colorScheme = {
    Active: 'green',
    Draft: 'yellow',
    Archived: 'gray',
  }[status] || 'gray';

  return <Badge colorScheme={colorScheme}>{status}</Badge>;
};

const groupByStatus = (products: Product[]) => {
  return {
    Active: products.filter((p) => p.status === 'Active'),
    Draft: products.filter((p) => p.status === 'Draft'),
    Archived: products.filter((p) => p.status === 'Archived'),
  };
};

const StatusColumn = ({
  title,
  color,
  items,
}: {
  title: string;
  color: string;
  items: Product[];
}) => {
  return (
    <Box w={{ base: '100%', md: '300px' }} minW="300px" px="2" flexShrink={0}>
      <Box
        borderTop="4px solid"
        borderColor={color}
        borderRadius="md"
        bg="white"
        boxShadow="sm"
        mb="2"
        px="4"
        py="2"
      >
        <Flex justify="space-between" align="center" mb="2">
          <Heading fontSize="md">{title}</Heading>
          <Badge colorScheme={color.toLowerCase()}>{items.length}</Badge>
        </Flex>

        <VStack  align="stretch">
          {items.map((product) => (
            <Card.Root
              key={product.id}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              px="4"
              py="3"
              boxShadow="sm"
            >
              <Card.Header>
                <Flex justify="space-between">
                  <Box>
                    <Text fontWeight="semibold">{product.name}</Text>
                    <Text fontSize="xs" color="gray.500">
                      ID: {product.id}
                    </Text>
                  </Box>
                  {/* <IconButton
                    icon={<BsThreeDotsVertical />}
                    aria-label="More"
                    size="xs"
                    variant="ghost"
                  /> */}
                </Flex>
              </Card.Header>

              <Card.Body>
                <Text fontSize="sm" mt="2">
                  Owner: <strong>{product.owner}</strong>
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Updated: {product.updated}
                </Text>
              </Card.Body>

              <Card.Footer mt="2">{getStatusBadge(product.status)}</Card.Footer>
            </Card.Root>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};
const BoardView = () => {
  const grouped = groupByStatus(products as Product[]);

  return (
    <Box w="90%" overflow="hidden">
      <Box overflowX="auto" pb="2">
        <Flex w="fit-content" gap="4">
          <StatusColumn title="Active" color="green" items={grouped.Active} />
          <StatusColumn title="Draft" color="yellow" items={grouped.Draft} />
          <StatusColumn title="Archived" color="gray" items={grouped.Archived} />
        </Flex>
      </Box>
    </Box>
  );
};


export default BoardView;
