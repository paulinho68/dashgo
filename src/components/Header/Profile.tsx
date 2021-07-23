import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box>
                    <Text>Paulo Vitor</Text>
                    <Text color="gray.300" fontSize="small">
                        paulovitor2123@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar ml="2" size="md" name="Paulo Vitor" src="https://avatars.githubusercontent.com/u/47464843?v=4" />
        </Flex>
    );
}