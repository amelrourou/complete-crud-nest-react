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

import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Sidebar from '../../shared/components/sidebar';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalWrapper';

const ListClientProfils = () => {
  const navigate = useNavigate();
  const { FetchClientProfils, Search, ClientProfils, onOpen, isOpen, onClose } =
    useContext(GlobalContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    FetchClientProfils();
  }, []);
  const SearchHandler = () => {
    Search(query);
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const items = 5;
  const [current, setCurrent] = useState(1);
  const NbPage = Math.ceil(ClientProfils.length / items);

  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;

  const ProfilsPerPage = ClientProfils.slice(startIndex, endIndex);

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
                List ClientProfils
              </Text>
              {ProfilsPerPage?.map(
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
                    <Card key={_id} mb="4" boxShadow="base">
                      <CardBody>
                        <Stack direction="row" alignItems="center" mb="2">
                          <Image
                            src={picture}
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
                          </Box>
                        </Stack>
                        <Text mb="2">{`company: ${company}`}</Text>
                        <Text mb="2">{`Description: ${Bio}`}</Text>
                      </CardBody>
                      <CardFooter>
                        <Button
                          variant="solid"
                          colorScheme="pink"
                          onClick={() => navigate(`/Clientprofils/${_id}`)}
                        >
                          voir Clientprofile
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

export default ListClientProfils;
