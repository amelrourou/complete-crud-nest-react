import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';

const FreelancerProfil = () => {
  const [Freelancerprofil, setFreelancerProfil] = useState({});
  const { id } = useParams();

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
          name={`${Freelancerprofil.firstName} ${Freelancerprofil.lastName}`}
          src={Freelancerprofil.avatar}
          mr={4}
        />
        <Box>
          <Heading
            as="h1"
            fontSize="3xl"
            fontWeight="bold"
          >{`${Freelancerprofil.firstName} ${Freelancerprofil.lastName}`}</Heading>
          <Text fontSize="xl" mb={2}>
            {Freelancerprofil.categorie}
          </Text>
          <Text fontSize="lg" mb={2}>
            Skills: {Freelancerprofil.skills}
          </Text>
          <Text fontSize="lg" mb={2}>
            Country: {Freelancerprofil.pays}
          </Text>
        </Box>
      </Flex>

      <Divider my={4} />
      <Box>
        <Heading as="h2" fontSize="2xl" mb={2}>
          About Me
        </Heading>
        <Text whiteSpace="pre-line" mb={8}>
          {Freelancerprofil.Bio}
        </Text>
      </Box>
      <Divider my={4} />
      <Box>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Portfolio
        </Heading>
        <Box>{Freelancerprofil.CV}</Box>
      </Box>
      <Divider my={4} />
      <Box>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Contact Information
        </Heading>
        <Text fontSize="lg" mb={2}>
          Email: {Freelancerprofil.email}
        </Text>
        <Text fontSize="lg" mb={2}>
          Phone: {Freelancerprofil.phone}
        </Text>
        <Text fontSize="lg" mb={2}>
          Birth Date: {Freelancerprofil.birthdate}
        </Text>
        <Text fontSize="lg" mb={2}>
          Address: {Freelancerprofil.address}
        </Text>
        <Text fontSize="lg" mb={2}>
          Zip Code: {Freelancerprofil.zipCode}
        </Text>
        <Text fontSize="lg" mb={2}>
          Country: {Freelancerprofil.pays}
        </Text>
        <Text fontSize="lg" mb={2}>
          Price per Hour: {Freelancerprofil.priceperhour}
        </Text>
        <Text fontSize="lg" mb={2}>
          Bank Account Number: {Freelancerprofil.NumCompt}
        </Text>
      </Box>
    </Box>
  );
};

export default FreelancerProfil;
