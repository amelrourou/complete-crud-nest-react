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

const ListFreelancerProfils = () => {
  const navigate = useNavigate();
  const {
    FetchFreelancerProfils,
    Search,
    FreelancerProfils,
    onOpen,
    isOpen,
    onClose,
  } = useContext(GlobalContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    FetchFreelancerProfils();
  }, []);
  const SearchHandler = () => {
    Search(query);
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const items = 5;
  const [current, setCurrent] = useState(1);
  const NbPage = Math.ceil(FreelancerProfils.length / items);

  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;

  const ProfilsPerPage = FreelancerProfils.slice(startIndex, endIndex);

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
                List FreelancerProfils
              </Text>
              {ProfilsPerPage?.map(
                ({
                  _id,
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
                            <Text mb="2">{`Category: ${categorie}`}</Text>
                          </Box>
                        </Stack>
                        <Text mb="2">{`Skills: ${skills}`}</Text>
                        <Text mb="2">{`Description: ${Bio}`}</Text>
                        <Text
                          color="blue.600"
                          fontSize="2xl"
                        >{` ${priceperhour}$ per hour`}</Text>
                      </CardBody>
                      <CardFooter>
                        <Button
                          variant="solid"
                          colorScheme="pink"
                          onClick={() => navigate(`/Freelancerprofils/${_id}`)}
                        >
                          voir Freelancerprofile
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

export default ListFreelancerProfils;
