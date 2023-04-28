import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../context/GlobalWrapper';

const Row = ({
  id,
  firstName,
  lastName,
  categorie,
  competences,
  CIN,
  pays,
  avatar,
  portfolio,
  pricebyhour,
  description,
  phone,
  dateNaissance,
  adresse,
  NumCompte,
}) => {
  const { Delete, onOpen, FindOne } = useContext(GlobalContext);
  return (
    <Tr>
      <Td>
        <Avatar name={`${firstName} ${lastName}`} />
      </Td>
      <Td>{firstName}</Td>
      <Td>{lastName}</Td>
      <Td>{categorie}</Td>
      <Td>{competences}</Td>
      <Td>{CIN}</Td>
      <Td>{pays}</Td>
      <Td>{avatar}</Td>
      <Td>{portfolio}</Td>
      <Td>{pricebyhour}</Td>
      <Td>{description}</Td>
      <Td>{phone}</Td>
      <Td>{dateNaissance}</Td>
      <Td>{adresse}</Td>
      <Td>{NumCompte}</Td>

      <Td>
        <Box display="flex" gap="1">
          <Button colorScheme={'blue'}>
            <AiFillEdit
              onClick={() => {
                onOpen();
                FindOne(id);
              }}
            />
          </Button>
          <Button colorScheme={'red'} onClick={() => Delete(id)}>
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
};

export default Row;
