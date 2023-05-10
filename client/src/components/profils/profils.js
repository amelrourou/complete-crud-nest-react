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
import { GlobalContext } from '../../context/GlobalWrapper';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Row from './Row';
import DrawerExample from './DrawerExample';

const Profils = () => {
  const { FetchProfils, Search, Profils, onOpen, isOpen, onClose } =
    useContext(GlobalContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    FetchProfils();
  }, []);
  const SearchHandler = () => {
    Search(query);
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
              List Profils
            </Text>
            <Button
              colorScheme="teal"
              variant="outline"
              maxW={'300px'}
              minW="150px"
              leftIcon={<AiOutlinePlus fontSize={'20px'} />}
              onClick={onOpen}
            >
              Add Profil
            </Button>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Avatar</Th>
                  <Th>firstName</Th>
                  <Th>lastName</Th>
                  <Th>categorie</Th>
                  <Th>competences</Th>
                  <Th>CIN</Th>
                  <Th>pays</Th>
                  <Th> avatar</Th>
                  <Th>portfolio</Th>
                  <Th>pricebyhour</Th>
                  <Th>description</Th>
                  <Th>phone</Th>
                  <Th>dateNaissance</Th>
                  <Th>adresse</Th>
                  <Th>NumCompte</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Profils?.map(
                  ({
                    _id,
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
                    return (
                      <Row
                        id={_id}
                        firstName={firstName}
                        lastName={lastName}
                        categorie={categorie}
                        competences={competences}
                        CIN={CIN}
                        pays={pays}
                        avatar={avatar}
                        portfolio={portfolio}
                        pricebyhour={pricebyhour}
                        description={description}
                        phone={phone}
                        dateNaissance={dateNaissance}
                        adresse={adresse}
                        NumCompte={NumCompte}
                      />
                    );
                  },
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <DrawerExample />
      </Container>
    </>
  );
};
export default Profils;
