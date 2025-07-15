import { Flex, Input, InputGroup, Avatar, Text, Spacer, AvatarGroup } from '@chakra-ui/react';
import { FiSearch, FiBell } from 'react-icons/fi';

const Navbar = ()=> {
  return (
    <Flex
      position="fixed"
      left="250px"
      right="0"
      top="0"
      height="60px"
      align="center"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      px="6"
      zIndex="1"
    >
        <InputGroup startElement={<FiSearch />}>
            <Input width={350} placeholder="Search Products...." />
        </InputGroup>

      <Spacer />

      <Flex align="center" gap="4">
        <FiBell size={20} />
        <AvatarGroup>
            <Avatar.Root>
                <Avatar.Fallback />
                <Avatar.Image />
            </Avatar.Root>
        </AvatarGroup>
        <Text fontWeight="medium">John Doe</Text>
      </Flex>
    </Flex>
  );
}

export default Navbar;