import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'The passwords need equals'),
});

export default function UserCreate() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    });

    const { errors } = formState;

    const handleSignUp: SubmitHandler<CreateUserFormData> = async (values, event) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box as="form" onSubmit={handleSubmit(handleSignUp)} flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Create user</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="name"
                                label="Full name"
                                type="text"
                                {...register('name')}
                                error={errors.name}
                            />
                            <Input
                                name="email"
                                label="E-mail"
                                type="email"
                                {...register('email')}
                                error={errors.email}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="password"
                                label="Password"
                                type="password"
                                {...register('password')}
                                error={errors.password}
                            />
                            <Input
                                name="password_confirmation"
                                label="Confirm password"
                                type="password"
                                {...register('password_confirmation')}
                                error={errors.password_confirmation}
                            />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">
                                    Cancel
                                </Button>
                            </Link>
                            <Button colorScheme="pink" isLoading={formState.isSubmitting} type="submit">
                                Save
                            </Button>
                        </HStack>
                    </Flex>
                </Box>

            </Flex>
        </Box>
    )
}