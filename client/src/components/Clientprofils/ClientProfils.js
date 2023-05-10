import {
  Box,
  Button,
  Container,
  Input,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import ClientRow from './ClientRow';
import ClientDrawerExample from './ClientDrawerExample';
import { GlobalContext } from '../../context/GlobalWrapper';

const ClientProfils = () => {
  const {
    FetchClientProfils,
    SearchClient,
    ClientProfils,
    onOpen,
    isOpen,
    onClose,
  } = useContext(GlobalContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    FetchClientProfils();
  }, []);
  const SearchHandler = () => {
    SearchClient(query);
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Container maxW={'full'} p="4" fontSize={'18px'}>
        <Box rounded="lg" boxShadow="base" p="4">
          <Box mt="2" gap={'2'} mb="4" display={'flex'}>
            <FormControl>
              <Input type="text" onChange={onchangeHandler} />
            </FormControl>
            <Button
              leftIcon={<AiOutlineSearch />}
              colorScheme="teal"
              variant="outline"
              maxW="300px"
              minW="150px"
              onClick={() => SearchHandler()}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box mt="5" rounded={'lg'} boxShadow="base">
          <Box p="4" display={'flex'} justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">
              List FreelanceurProfils
            </Text>
            <Button
              colorScheme="teal"
              variant="outline"
              maxW={'300px'}
              minW="150px"
              leftIcon={<AiOutlinePlus fontSize={'20px'} />}
              onClick={onOpen}
            >
              Add ClientProfil
            </Button>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Avatar</Th>
                  <Th>firstName</Th>
                  <Th>lastName</Th>

                  <Th>company</Th>
                  <Th>BIO</Th>
                  <Th>Picture</Th>

                  <Th>pays</Th>
                  <Th>adresse</Th>
                  <Th>CIN</Th>
                  <Th>NumCompt</Th>
                  <Th>phone</Th>
                  <Th>dateNaissance</Th>

                  <Th>Avis</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {ClientProfils?.map(
                  ({
                    _id,
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
                    return (
                      <ClientRow
                        id={_id}
                        firstName={firstName}
                        lastName={lastName}

                        company={company}
                        Bio={Bio}
                        picture={picture}

                        pays={pays}
                        address={address}
                        CIN={CIN}
                        NumCompt={NumCompt}
                        phone={phone}
                        Birthdate={Birthdate}

                        Avis={Avis}
                        status={status}
                      />
                    );
                  },
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <ClientDrawerExample />
      </Container>
    </>
  );
};
export default ClientProfils;
