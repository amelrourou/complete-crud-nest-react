import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';

const ClientProfil = () => {
  const [Clientprofil, setClientProfil] = useState({});
  const { id } = useParams();

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
          name={`${Clientprofil.firstName} ${Clientprofil.lastName}`}
          src={Clientprofil.avatar}
          mr={4}
        />
        <Box>
          <Heading
            as="h1"
            fontSize="3xl"
            fontWeight="bold"
          >{`${Clientprofil.firstName} ${Clientprofil.lastName}`}</Heading>

          <Text fontSize="lg" mb={2}>
            company: {Clientprofil.company}
          </Text>
          <Text fontSize="lg" mb={2}>
            Country: {Clientprofil.pays}
          </Text>
        </Box>
      </Flex>
      <Divider my={4} />
      <Box>
        <Heading as="h2" fontSize="2xl" mb={2}>
          About Me
        </Heading>
        <Text whiteSpace="pre-line" mb={8}>
          {Clientprofil.Bio}
        </Text>
      </Box>
      <Divider my={4} />

      <Divider my={4} />
      <Box>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Contact Information
        </Heading>
        <Text fontSize="lg" mb={2}>
          Email: {Clientprofil.email}
        </Text>
        <Text fontSize="lg" mb={2}>
          Phone: {Clientprofil.phone}
        </Text>
        <Text fontSize="lg" mb={2}>
          Birth Date: {Clientprofil.birthdate}
        </Text>
        <Text fontSize="lg" mb={2}>
          Address: {Clientprofil.address}
        </Text>
        <Text fontSize="lg" mb={2}>
          Zip Code: {Clientprofil.zipCode}
        </Text>
        <Text fontSize="lg" mb={2}>
          Country: {Clientprofil.pays}
        </Text>

        <Text fontSize="lg" mb={2}>
          Bank Account Number: {Clientprofil.NumCompt}
        </Text>
      </Box>
    </Box>
  );
};

export default ClientProfil;
