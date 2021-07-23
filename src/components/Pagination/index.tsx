import { Box, Flex, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <Flex
            mt="8"
            justify="space-between"
            align="center"
        >
            <Box w="100">
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem number={1} isCurrent />
                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
            </Stack>
        </Flex>
    )
}