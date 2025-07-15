import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Tabs,
  Field,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaLock, FaEnvelope, FaEye, FaEyeSlash, FaMobileAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useColorModeValue } from '@/components/ui/color-mode';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
//   const [tab, setTab] = useState("password");
  const togglePassword = () => setShowPassword(!showPassword);

  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        w="full"
        maxW="md"
        p={8}
        bg={cardBg}
        borderRadius="xl"
        boxShadow="lg"
      >
        <Flex justify="center" mb={4}>
          <Icon as={FaLock} w={10} h={10} color="blue.500" p={2} borderRadius="full" bg="blue.100" />
        </Flex>
        <Heading size="lg" textAlign="center" mb={1}>
          Welcome back
        </Heading>
        <Text textAlign="center" color="gray.500" mb={6}>
          Sign in to your account to continue
        </Text>

        <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1" value={"password"} >
          <Tabs.List bg="gray.100" p={1} borderRadius="md" mb={6}>
            <Tabs.Trigger value="password">
              <Flex align="center" gap={2}>
                <Icon as={FaLock} /> Password
              </Flex>
            </Tabs.Trigger>
            <Tabs.Trigger value="otp">
              <Flex align="center" gap={2}>
                <Icon as={FaMobileAlt} /> OTP
              </Flex>
            </Tabs.Trigger>
            <Tabs.Indicator />
          </Tabs.List>

          <Tabs.Content value="password">
            <Stack gap={4} maxW="sm">
              <Field.Root>
                <Field.Label>Email address</Field.Label>
                <InputGroup startElement={<FaEnvelope color="gray.400" />}>
                  <Input type="email" placeholder="Enter your email" />
                </InputGroup>
              </Field.Root>

              <Field.Root>
                <Field.Label>Password</Field.Label>
                <InputGroup
                  startElement={<FaLock color="gray.400" />}
                  endElement={
                    <IconButton aria-label="Toggle password visibility"
                      variant="ghost"
                      size="sm"
                      onClick={togglePassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  }
                >
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                  />
                </InputGroup>
              </Field.Root>

              <Button colorScheme="blue" w="full">
                Sign in with Password
              </Button>
            </Stack>
          </Tabs.Content>

          <Tabs.Content value="otp">
            <Stack gap={4} maxW="sm">
              <Field.Root>
                <Field.Label>Mobile number</Field.Label>
                <InputGroup startElement={<FaMobileAlt color="gray.400" />}>
                  <Input type="tel" placeholder="Enter your mobile number" />
                </InputGroup>
              </Field.Root>
              <Button colorScheme="blue" w="full">
                Send OTP
              </Button>
            </Stack>
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Flex>
  );
};

export default LoginPage;