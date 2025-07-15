import React from 'react';
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Progress,
  Stack,
  Text,
  VStack,
  Badge,
  Separator
} from '@chakra-ui/react';
import {
  FiArrowLeft,
  FiTag,
  FiUser,
  FiFolder,
  FiCalendar,
  FiFile,
  FiDownload,
  FiCheck,
  FiClock,
  FiCircle
} from 'react-icons/fi';

const ProjectDetailPage: React.FC = () => {
  const timelineItems = [
    {
      title: 'Planning',
      date: '11/30/2023',
      status: 'completed',
      icon: FiCheck,
      color: 'green'
    },
    {
      title: 'Development',
      date: '12/14/2023',
      status: 'completed',
      icon: FiCheck,
      color: 'green'
    },
    {
      title: 'Testing',
      date: '1/9/2024',
      status: 'current',
      icon: FiClock,
      color: 'blue'
    },
    {
      title: 'Deployment',
      date: '1/24/2024',
      status: 'pending',
      icon: FiCircle,
      color: 'gray'
    }
  ];

  const files = [
    {
      name: 'Dashboard_Wireframes_v3.pdf',
      size: '2.4 MB',
      uploadDate: '1/14/2024'
    },
    {
      name: 'API_Documentation_v2.1.pdf',
      size: '1.8 MB',
      uploadDate: '1/13/2024'
    },
    {
      name: 'Design_System_Guide.sketch',
      size: '15.2 MB',
      uploadDate: '1/12/2024'
    },
    {
      name: 'Database_Schema_v1.sql',
      size: '0.5 MB',
      uploadDate: '1/11/2024'
    },
    {
      name: 'User_Testing_Results.xlsx',
      size: '3.1 MB',
      uploadDate: '1/10/2024'
    }
  ];

  return (
    <Box maxW="1200px" mx="auto" p={6} bg="gray.50" minH="100vh">
      {/* Header */}
      <HStack mb={8} align="center">
        <Button
          variant="ghost"
          leftIcon={<Icon as={FiArrowLeft} />}
          size="sm"
          color="gray.600"
        >
          Back to Products
        </Button>
      </HStack>

      {/* Title Section */}
      <Flex justify="space-between" align="center" mb={8}>
        <Box>
          <Heading size="xl" mb={2}>
            Premium Dashboard Pro
          </Heading>
          <Text color="gray.600" fontSize="lg">
            A comprehensive dashboard solution with advanced analytics and real-time monitoring capabilities.
          </Text>
        </Box>
        <Badge colorScheme="green" variant="subtle" px={3} py={1} borderRadius="full">
          Active
        </Badge>
      </Flex>

      {/* Main Content Grid */}
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr 300px' }} gap={6} mb={8}>
        {/* Basic Information */}
        <GridItem>
          <Card p={6} bg="white" boxShadow="sm">
            <Heading size="md" mb={4}>
              Basic Information
            </Heading>
            <Stack spacing={4}>
              <HStack>
                <Icon as={FiTag} color="gray.500" />
                <Box>
                  <Text fontSize="sm" color="gray.600">
                    Product ID
                  </Text>
                  <Text fontWeight="medium">PRD-001</Text>
                </Box>
              </HStack>
              <HStack>
                <Icon as={FiUser} color="gray.500" />
                <Box>
                  <Text fontSize="sm" color="gray.600">
                    Owner
                  </Text>
                  <Text fontWeight="medium">Sarah Johnson</Text>
                </Box>
              </HStack>
              <HStack>
                <Icon as={FiFolder} color="gray.500" />
                <Box>
                  <Text fontSize="sm" color="gray.600">
                    Category
                  </Text>
                  <Text fontWeight="medium">Web Application</Text>
                </Box>
              </HStack>
              <HStack>
                <Icon as={FiCalendar} color="gray.500" />
                <Box>
                  <Text fontSize="sm" color="gray.600">
                    Created Date
                  </Text>
                  <Text fontWeight="medium">November 30, 2023</Text>
                </Box>
              </HStack>
            </Stack>
          </Card>
        </GridItem>

        {/* Progress Tracking */}
        <GridItem>
          <Card p={6} bg="white" boxShadow="sm">
            <Heading size="md" mb={4}>
              Progress Tracking
            </Heading>
            
            <Box mb={6}>
              <Flex justify="space-between" mb={2}>
                <Text fontSize="sm" color="gray.600">
                  Overall Progress
                </Text>
                <Text fontSize="sm" fontWeight="medium" color="blue.500">
                  85%
                </Text>
              </Flex>
              <Progress value={85} colorScheme="blue" size="md" borderRadius="full" />
            </Box>

            <Box>
              <Text fontSize="md" fontWeight="medium" mb={4}>
                Timeline
              </Text>
              <VStack align="stretch" spacing={3}>
                {timelineItems.map((item, index) => (
                  <HStack key={index} align="start" spacing={3}>
                    <Icon
                      as={item.icon}
                      color={`${item.color}.500`}
                      boxSize={4}
                      mt={1}
                    />
                    <Box flex={1}>
                      <Text
                        fontWeight="medium"
                        color={item.status === 'pending' ? 'gray.400' : 'inherit'}
                      >
                        {item.title}
                      </Text>
                      <Text
                        fontSize="sm"
                        color={item.status === 'pending' ? 'gray.400' : 'gray.600'}
                      >
                        {item.date}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Card>
        </GridItem>

        {/* Quick Stats */}
        <GridItem>
          <Card p={6} bg="white" boxShadow="sm">
            <Heading size="md" mb={4}>
              Quick Stats
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={4} mb={4}>
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="blue.500">
                  5
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Files
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="green.500">
                  4
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Phases
                </Text>
              </Box>
            </Grid>
            <Box bg="yellow.50" p={4} borderRadius="md" textAlign="center">
              <Text fontSize="3xl" fontWeight="bold" color="yellow.600">
                23
              </Text>
              <Text fontSize="sm" color="gray.600">
                Days Active
              </Text>
            </Box>
          </Card>
        </GridItem>
      </Grid>

      {/* File Versions */}
      <Card p={6} bg="white" boxShadow="sm">
        <Heading size="md" mb={4}>
          File Versions
        </Heading>
        <Stack spacing={4}>
          {files.map((file, index) => (
            <Box key={index}>
              <HStack justify="space-between" align="center" py={3}>
                <HStack spacing={3}>
                  <Icon as={FiFile} color="gray.500" boxSize={5} />
                  <Box>
                    <Text fontWeight="medium">{file.name}</Text>
                    <Text fontSize="sm" color="gray.600">
                      {file.size} • Uploaded on {file.uploadDate}
                    </Text>
                  </Box>
                </HStack>
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<Icon as={FiDownload} />}
                  color="gray.600"
                  _hover={{ bg: 'gray.100' }}
                >
                  Download
                </Button>
              </HStack>
              {index < files.length - 1 && <Separator />}
            </Box>
          ))}
        </Stack>
      </Card>
    </Box>
  );
};

export default ProjectDetailPage;