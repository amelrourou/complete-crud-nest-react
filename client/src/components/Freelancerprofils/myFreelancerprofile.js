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
import { Card,  CardBody, CardFooter } from '@chakra-ui/react';

import {
  AiFillDelete,
  AiFillEdit,

} from 'react-icons/ai';
import { GlobalContext } from '../../context/GlobalWrapper';
import FreelancerDrawerExample from './FreelancerDrawerExample';

const MyFreelancerProfil = () => {
  const [Freelancerprofil, setFreelancerProfil] = useState({});
  const { id } = useParams();

  const { DeleteFreelancer, onOpen, FindFreelancer } =
    useContext(GlobalContext);

  useEffect(() => {
    const fetchFreelancerProfil = async () => {
      const res = await axios.get(`/api/Freelancerprofils/${id}`);
      setFreelancerProfil(res.data);
    };
    fetchFreelancerProfil();
  }, [id]);

  if (!Freelancerprofil) {
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
              {Freelancerprofil.firstName}
              {Freelancerprofil.lastName}
            </Heading>
            <Text fontSize="xl" color="gray.500">
              {Freelancerprofil.categorie}
            </Text>
            <Stack mt="3" isInline spacing="3">
              <Badge variantColor="green"> {Freelancerprofil.skills}</Badge>
              <Badge variantColor="green"> {Freelancerprofil.skills}</Badge>
              <Badge variantColor="green">{Freelancerprofil.skills}</Badge>
              <Badge variantColor="green"> {Freelancerprofil.skills}</Badge>
            </Stack>
          </Box>
          <Spacer />
          <Box display="flex" gap="1">
            <Button colorScheme={'blue'}>
              <AiFillEdit
                onClick={() => {
                  onOpen();
                  FindFreelancer(id);
                }}
              />
            </Button>
            <Button colorScheme={'red'} onClick={() => DeleteFreelancer(id)}>
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
            <Text py="2">{Freelancerprofil.Bio}</Text>
            <Text mb="2"> {Freelancerprofil.CIN}</Text>
            <Text mb="2"> {Freelancerprofil.pays}</Text>
            <Text mb="2"> {Freelancerprofil.CV}</Text>
            <Text mb="2"> {Freelancerprofil.phone}</Text>
            <Text mb="2">{Freelancerprofil.Bio}</Text>
            <Text mb="2"> {Freelancerprofil.birthdate}</Text>
            <Text mb="2"> {Freelancerprofil.address}</Text>
          </CardBody>

          <CardFooter>
            <Text mb="2">{Freelancerprofil.priceperhour}$per hour</Text>
          </CardFooter>
        </Stack>
      </Card>
      <FreelancerDrawerExample />
    </>
  );
};
export default MyFreelancerProfil;
