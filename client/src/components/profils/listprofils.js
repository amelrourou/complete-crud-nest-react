import {
  Box,
  Button,
  Container,
  Image,
  Input,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
  Center,
  AbsoluteCenter,
} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalWrapper';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Sidebar from '../../shared/components/sidebar';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const ListProfils = () => {
  const navigate = useNavigate();
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

  const items = 5;
  const [current, setCurrent] = useState(1);
  const NbPage = Math.ceil(Profils.length / items);

  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;

  const ProfilsPerPage = Profils.slice(startIndex, endIndex);

  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
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
            <Box p="4">
              <Text fontSize="xl" fontWeight="bold" mb="4">
                List Profils
              </Text>
              {ProfilsPerPage?.map(
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
                    <Card key={_id} mb="4" boxShadow="base">
                      <CardBody>
                        <Stack direction="row" alignItems="center" mb="2">
                          <Image
                            src={avatar}
                            alt={`${firstName} ${lastName} Avatar`}
                            borderRadius="full"
                            boxSize="50px"
                            objectFit="cover"
                            fallbackSrc="https://via.placeholder.com/50"
                            mr="2"
                          />
                          <Box>
                            <Text fontWeight="bold" fontSize="lg">
                              {`${firstName} ${lastName}`}
                            </Text>
                            <Text mb="2">{`Category: ${categorie}`}</Text>
                          </Box>
                        </Stack>
                        <Text mb="2">{`Skills: ${competences}`}</Text>
                        <Text mb="2">{`Description: ${description}`}</Text>
                        <Text
                          color="blue.600"
                          fontSize="2xl"
                        >{` ${pricebyhour}$ per hour`}</Text>
                      </CardBody>
                      <CardFooter>
                        <Button
                          variant="solid"
                          colorScheme="pink"
                          onClick={() => navigate(`/profils/${_id}`)}
                        >
                          voir profile
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                },
              )}
            </Box>
            <Box position="relative">
              <AbsoluteCenter p="4" color="white">
                {Array.from({ length: NbPage }, (_, i) => i + 1).map((page) => {
                  return (
                    <Button bg="purple.100" onClick={() => setCurrent(page)}>
                      {page}
                    </Button>
                  );
                })}
              </AbsoluteCenter>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default ListProfils;
/*

import {
  Box,
  Button,
  Container,
  Image,
  Input,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Sidebar from '../shared/components/sidebar';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const ListProfils = () => {
  const navigate = useNavigate();
  const { FetchProfils, Search, Profils, onOpen, isOpen, onClose } =
    useContext(GlobalContext);
  const [query, setQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    category: '',
    skills: '',
    price: '',
  });
  useEffect(() => {
    FetchProfils();
  }, []);

  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const filterByCategory = (profil) => {
    if (!filterOptions.category) return true;
    return profil.categorie === filterOptions.category;
  };

  const filterBySkills = (profil) => {
    if (!filterOptions.skills) return true;
    return profil.competences.includes(filterOptions.skills);
  };

  const filterByPrice = (profil) => {
    if (!filterOptions.price) return true;
    return profil.pricebyhour <= filterOptions.price;
  };

  const filteredProfils = Profils.filter(
    (profil) =>
      filterByCategory(profil) &&
      filterBySkills(profil) &&
      filterByPrice(profil),
  );

  return (
    <>
      <div className="sidebar">
        <Sidebar setFilterOptions={setFilterOptions} />
      </div>

      <div className="content">
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
                onClick={() => Search(query)}
              >
                Search
              </Button>
            </Box>
          </Box>
          <Box mt="5" rounded={'lg'} boxShadow="base">
            <Box p="4">
              <Text fontSize="xl" fontWeight="bold" mb="4">
                List Profils
              </Text>
              {filteredProfils.map(
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
                    <Card key={_id} mb="4" boxShadow="base">
                      <CardBody>
                        <Stack direction="row" alignItems="center" mb="2">
                          <Image
                            src={avatar}
                            alt={`${firstName} ${lastName} Avatar`}
                            borderRadius="full"
                            boxSize="50px"
                            objectFit="cover"
                            fallbackSrc="https://via.placeholder.com/50"
                            mr="2"
                          />
                          <Box>
                            <Text fontWeight="bold" fontSize="lg">
                              {`${firstName} ${lastName}`}
                            </Text>
                            <Text mb="2">{`Category: ${categorie}`}</Text>
                          </Box>
                        </Stack>
                        <Text mb="2">{`Skills: ${competences}`}</Text>
                        <Text mb="2">{`Description: ${description}`}</Text>
                        <Text
                          color="blue.600"
                          fontSize="2xl"
                        >{` ${pricebyhour}$ per hour`}</Text>
                      </CardBody>
                      <CardFooter>
                        <Button
                          variant="solid"
                          colorScheme="pink"
                          onClick={() => navigate(`/profils/${_id}`)}
                        >
                          voir profile
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                },
              )}
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default ListProfils;
*/
