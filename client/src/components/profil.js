import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';

const MyProfil = () => {
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
    <Box
      maxW="3xl"
      mx="auto"
      my={8}
      p={4}
      bg="white"
      boxShadow="md"
      borderRadius="md"
    >
      <Flex alignItems="center">
        <Avatar
          size="xl"
          name={`${profil.firstName} ${profil.lastName}`}
          src={profil.avatar}
          mr={4}
        />
        <Box>
          <Heading
            as="h1"
            fontSize="3xl"
            fontWeight="bold"
          >{`${profil.firstName} ${profil.lastName}`}</Heading>
          <Text fontSize="xl" mb={2}>
            {profil.categorie}
          </Text>
          <Text fontSize="lg" mb={2}>
            Skills: {profil.competences}
          </Text>
          <Text fontSize="lg" mb={2}>
            Country: {profil.pays}
          </Text>
        </Box>
      </Flex>
      <Divider my={4} />
      <Box>
        <Heading as="h2" fontSize="2xl" mb={2}>
          About Me
        </Heading>
        <Text whiteSpace="pre-line" mb={8}>
          {profil.description}
        </Text>
      </Box>
      <Divider my={4} />
      <Box>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Portfolio
        </Heading>
        <Box>{profil.portfolio}</Box>
      </Box>
      <Divider my={4} />
      <Box>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Contact Information
        </Heading>
        <Text fontSize="lg" mb={2}>
          Email: {profil.email}
        </Text>
        <Text fontSize="lg" mb={2}>
          Phone: {profil.phone}
        </Text>
        <Text fontSize="lg" mb={2}>
          Birth Date: {profil.dateNaissance}
        </Text>
        <Text fontSize="lg" mb={2}>
          Address: {profil.adresse}
        </Text>
        <Text fontSize="lg" mb={2}>
          Zip Code: {profil.zipCode}
        </Text>
        <Text fontSize="lg" mb={2}>
          Country: {profil.pays}
        </Text>
        <Text fontSize="lg" mb={2}>
          Price per Hour: {profil.pricebyhour}
        </Text>
        <Text fontSize="lg" mb={2}>
          Bank Account Number: {profil.NumCompte}
        </Text>
      </Box>
    </Box>
  );
};

export default MyProfil;
