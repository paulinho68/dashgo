import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean;
    number: number;
    onPageChange: (page: number) => void;
}
export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }
    return (<Button
        size="sm"
        fontSize="xs"
        w="4"
        bg="gray.700"
        cursor="pointer"
        onClick={() => onPageChange(number)}
        _hover={{
            bg: 'pink.500',
        }}
    >
        {number}
    </Button>)
}