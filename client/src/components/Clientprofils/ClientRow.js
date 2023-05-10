import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../../context/GlobalWrapper';


const Row = ({
  id,
  firstName,
  lastName,

  company,
  Bio,
  picture,

  pays,
  address,
  CIN,
  NumCompt,
  phone,
  Birthdate,

  Avis,
  status,
}) => {
  const { DeleteClient, onOpen, FindClient } =
    useContext(GlobalContext);
  return (
    <Tr>
      <Td>
        <Avatar name={`${firstName} ${lastName}`} />
      </Td>
      <Td>{firstName}</Td>
      <Td>{lastName}</Td>

      <Td>{company}</Td>
      <Td>{Bio}</Td>
      <Td>{picture}</Td>

      <Td>{pays}</Td>
      <Td>{address}</Td>
      <Td>{CIN}</Td>
      <Td>{NumCompt}</Td>
      <Td>{phone}</Td>
      <Td>{Birthdate}</Td>

      <Td>{Avis}</Td>
      <Td>{status}</Td>
      <Td>
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
      </Td>
    </Tr>
  );
};

export default Row;
