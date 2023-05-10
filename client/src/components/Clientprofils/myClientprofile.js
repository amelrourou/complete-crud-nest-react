import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Badge,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../../context/GlobalWrapper';
import ClientDrawerExample from './ClientDrawerExample';

const MyClientProfil = () => {
  const [Clientprofil, setClientProfil] = useState({});
  const { id } = useParams();

  const { DeleteClient, onOpen, FindClient } = useContext(GlobalContext);

  useEffect(() => {
    const fetchClientProfil = async () => {
      const res = await axios.get(`/api/Clientprofils/${id}`);
      setClientProfil(res.data);
    };
    fetchClientProfil();
  }, [id]);

  if (!Clientprofil) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box maxW="900px" mx="auto" my="50px" px="4">
        <Flex alignItems="center" mb="5">
          <Image
            src="https://via.placeholder.com/200"
            alt="pic"
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/200"
            mr="5"
          />
          <Box>
            <Heading size="xl" fontWeight="bold">
              {Clientprofil.firstName}
              {Clientprofil.lastName}
            </Heading>
            <Text fontSize="xl" color="gray.500">
              {Clientprofil.categorie}
            </Text>
            <Stack mt="3" isInline spacing="3">
              <Badge variantColor="green"> {Clientprofil.company}</Badge>
            </Stack>
          </Box>
          <Spacer />
          <Box display="flex" gap="1">
            <Button colorScheme={'blue'}>
              <AiFillEdit
                onClick={() => {
                  onOpen();
                  FindClient(id);
                }}
              />
            </Button>
            <Button colorScheme={'red'} onClick={() => DeleteClient(id)}>
              <AiFillDelete />
            </Button>
          </Box>
        </Flex>
      </Box>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody>
            <Text py="2">{Clientprofil.Bio}</Text>
            <Text mb="2"> {Clientprofil.CIN}</Text>
            <Text mb="2"> {Clientprofil.pays}</Text>

            <Text mb="2"> {Clientprofil.phone}</Text>

            <Text mb="2"> {Clientprofil.birthdate}</Text>
            <Text mb="2"> {Clientprofil.address}</Text>
          </CardBody>

          <CardFooter>
            <Text mb="2">{Clientprofil.Avis}</Text>
          </CardFooter>
        </Stack>
      </Card>
      <ClientDrawerExample />
    </>
  );
};
export default MyClientProfil;
