import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../../context/GlobalWrapper';


const Row = ({
  id,
  firstName,
  lastName,
  categorie,
  skills,
  Bio,
  picture,
  CV,
  pays,
  address,
  CIN,
  NumCompt,
  phone,
  Birthdate,
  priceperhour,
  Avis,
  status,
}) => {
  const { DeleteFreelancer, onOpen, FindFreelancer } =
    useContext(GlobalContext);
  return (
    <Tr>
      <Td>
        <Avatar name={`${firstName} ${lastName}`} />
      </Td>
      <Td>{firstName}</Td>
      <Td>{lastName}</Td>
      <Td>{categorie}</Td>
      <Td>{skills}</Td>
      <Td>{Bio}</Td>
      <Td>{picture}</Td>
      <Td>{CV}</Td>
      <Td>{pays}</Td>
      <Td>{address}</Td>
      <Td>{CIN}</Td>
      <Td>{NumCompt}</Td>
      <Td>{phone}</Td>
      <Td>{Birthdate}</Td>
      <Td>{priceperhour}</Td>
      <Td>{Avis}</Td>
      <Td>{status}</Td>
      <Td>
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
      </Td>
    </Tr>
  );
};

export default Row;
