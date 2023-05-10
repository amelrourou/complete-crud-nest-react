import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
} from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';

const NavbarOut = () => {
  return (
    <Box bg="#7858A6" px={3}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link to="/">
            {' '}
            <Box
              as="button"
              color="white"
              mr={6}
              _hover={{ color: 'orange.500' }}
            >
              Home
            </Box>
          </Link>
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Box
                as="button"
                color="white"
                mr={6}
                _hover={{ color: 'orange.500' }}
              >
                About Us
              </Box>
            </PopoverTrigger>
            <PopoverContent bg="gray.200" color="gray.800">
              <PopoverBody>
                <VStack spacing={2} align="stretch">
                  <Link to="/home">Freelancy</Link>{' '}
                  <Link to="/services">what we provide</Link>
                  <Link to="/commitments">commitments</Link>
                  <Link to="/service">services</Link>
                  <Link to="/people">Sign Up</Link>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Link to="/services">
            <Box
              as="button"
              color="white"
              mr={6}
              _hover={{ color: 'orange.500' }}
            >
              Categories
            </Box>
          </Link>
          <Link to="/contact">
            <Box
              as="button"
              color="white"
              mr={6}
              _hover={{ color: 'orange.500' }}
            >
              Contact Us
            </Box>
          </Link>
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Box
                as="button"
                color="white"
                mr={6}
                _hover={{ color: 'orange.500' }}
              >
                Help
              </Box>
            </PopoverTrigger>
            <PopoverContent bg="gray.200" color="gray.800">
              <PopoverBody>
                <VStack spacing={2} align="stretch">
                  <Link to="/questions">Frequently Asked Questions</Link>
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/terms">Terms of Service</Link>
                  <Link to="/privacy">Privacy Policy</Link>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Flex alignItems="center">
          <Link to="/logout">
            <Box as="button" color="white" ml={-20}>
              Log Out
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavbarOut;
