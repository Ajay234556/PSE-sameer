import { Box, VStack, Icon, Text, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiPackage, FiFolder, FiSettings, FiLogOut } from 'react-icons/fi';

const navItems = [
  { label: 'Dashboard', icon: FiGrid, to: '/' },
  { label: 'Products', icon: FiPackage, to: '/products' },
  { label: 'Files', icon: FiFolder, to: '/files' },
  { label: 'Settings', icon: FiSettings, to: '/settings' },
];

const Sidebar = () =>{
  return (
    <Box
      w="250px"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      p="4"
      position="fixed"
      height="100vh"
      display="flex"
      flexDir={"column"}
      justifyContent={"space-between"}
    >
        <Flex direction="column">
            <Text fontSize="xl" fontWeight="bold" mb="6">
                ProductHub
            </Text>

            <VStack align="stretch" >
                {navItems.map((item) => (
                <NavLink
                    to={item.to}
                    key={item.label}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? '#f0f4ff' : 'transparent',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? '#2b6cb0' : '#2d3748',
                    textDecoration: 'none',
                    })}
                >
                    <Icon as={item.icon} boxSize={5} />
                    {item.label}
                </NavLink>
                ))}
            </VStack>
        </Flex>

        <Box mt="auto" pt="10">
            <NavLink to="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#718096' }}>
                <Icon as={FiLogOut} boxSize={5} />
                Logout
            </NavLink>
        </Box>
    </Box>
  );
}

export default Sidebar;