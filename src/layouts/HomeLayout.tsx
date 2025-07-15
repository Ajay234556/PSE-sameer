import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {

    return (
        <Flex height="100vh">
            <Sidebar />
            <Box flex="1" bg="gray.50">
                <Navbar />
                <Box mt="16" px="6" py="4">
                    <Outlet />
                </Box>
            </Box>
        </Flex>
    )
};
export default HomeLayout;