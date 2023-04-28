import React, { useState, useEffect } from 'react';
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
  Icon,
  Divider,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

import { AiFillStar, AiOutlinePhone } from 'react-icons/ai';
import { FaRegEnvelope } from 'react-icons/fa';

const Profil = () => {
  const [profil, setProfil] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProfil = async () => {
      const res = await axios.get(`/api/profils/${id}`);
      setProfil(res.data);
    };
    fetchProfil();
  }, [id]);

  if (!profil) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box maxW="900px" mx="auto" my="50px" px="4">
        <Flex alignItems="center" mb="5">
          <Image
            src="https://via.placeholder.com/200"
            alt="John Doe"
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/200"
            mr="5"
          />
          <Box>
            <Heading size="xl" fontWeight="bold">
              {profil.firstName}
              {profil.lastName}
            </Heading>
            <Text fontSize="xl" color="gray.500">
              {profil.categorie}
            </Text>
            <Stack mt="3" isInline spacing="3">
              <Badge variantColor="green"> {profil.competences}</Badge>
              <Badge variantColor="green"> {profil.competences}</Badge>
              <Badge variantColor="green">{profil.competences}</Badge>
              <Badge variantColor="green"> {profil.competences}</Badge>
            </Stack>
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
            <Text py="2">{profil.discription}</Text>
            <Text mb="2"> {profil.CIN}</Text>
            <Text mb="2"> {profil.pays}</Text>
            <Text mb="2"> {profil.portfolio}</Text>
            <Text mb="2"> {profil.phone}</Text>
            <Text mb="2">{profil.description}</Text>
            <Text mb="2"> {profil.dateNaissance}</Text>
            <Text mb="2"> {profil.address}</Text>
          </CardBody>

          <CardFooter>
            <Text mb="2">{profil.pricebyhour}$per hour</Text>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};
export default Profil;

/*<Box bg="gray.50" px={4} py={6}>
<Flex alignItems="center" justifyContent="space-between">
  <Box>
    <Text fontSize="2xl" fontWeight="bold">
      {`${profil.firstName} ${profil.lastName}`}
    </Text>
    <Text
      fontSize="lg"
      color="gray.600"
    >{`Category: ${profil.categorie}`}</Text>
  </Box>
  <Avatar size="xl" src={profil.avatar} />
</Flex>
<Box mt={6}>
  <Text fontSize="lg" fontWeight="bold" mb={2}>
    Description:
  </Text>
  <Text fontSize="lg">{profil.description}</Text>
</Box>
<Box mt={6}>
  <Text fontSize="lg" fontWeight="bold" mb={2}>
    Skills:
  </Text>
  <Stack direction="row" spacing={4}>
    {profil.competences.map((competence) => (
      <Button key={competence} variant="solid"></Button>
    ))}
    /
  </Stack>
</Box>
</Box>*/

/*import { Box, Button, Container, Image, Stack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import Sidebar from '../shared/components/sidebar';

const Profil = () => {
  const { selectedProfil } = useContext(GlobalContext);

  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="content">
        <Container maxW={'full'} p="4" fontSize={'18px'}>
          <Box rounded="lg" boxShadow="base" p="4">
            <Stack direction="row" alignItems="center">
              <Image
                src={selectedProfil?.avatar}
                alt={`${selectedProfil?.firstName} ${selectedProfil?.lastName} Avatar`}
                borderRadius="full"
                boxSize="150px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Box>
                <Text fontWeight="bold" fontSize="3xl">
                  {`${selectedProfil?.firstName} ${selectedProfil?.lastName}`}
                </Text>
                <Text mb="2" fontSize="xl">{`Category: ${selectedProfil?.categorie}`}</Text>
                <Text mb="2" fontSize="xl">{`Skills: ${selectedProfil?.competences}`}</Text>
                <Text mb="2" fontSize="xl">{`Price: ${selectedProfil?.pricebyhour}$ per hour`}</Text>
                <Button variant="solid" colorScheme="blue" size="lg">
                  Contact
                </Button>
              </Box>
            </Stack>
          </Box>
          <Box mt="5" rounded={'lg'} boxShadow="base">
            <Box p="4">
              <Text fontSize="xl" fontWeight="bold" mb="4">
                About me
              </Text>
              <Text mb="2" fontSize="xl">{`Description: ${selectedProfil?.description}`}</Text>
              <Text mb="2" fontSize="xl">{`Country: ${selectedProfil?.pays}`}</Text>
              <Text mb="2" fontSize="xl">{`CIN: ${selectedProfil?.CIN}`}</Text>
              <Text mb="2" fontSize="xl">{`Date of birth: ${selectedProfil?.dateNaissance}`}</Text>
              <Text mb="2" fontSize="xl">{`Address: ${selectedProfil?.adresse}`}</Text>
              <Text mb="2" fontSize="xl">{`Phone: ${selectedProfil?.phone}`}</Text>
              <Text mb="2" fontSize="xl">{`Portfolio: ${selectedProfil?.portfolio}`}</Text>
              <Text mb="2" fontSize="xl">{`Bank account number: ${selectedProfil?.NumCompte}`}</Text>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Profil;
*/
