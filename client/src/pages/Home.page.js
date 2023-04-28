import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Text } from '@chakra-ui/react';
export default function Home() {
  return (
    <>
      <Box my={2} textAlign="center">
        <Link to="/listprofils">
          <Button
            variant="contained"
            style={{ backgroundColor: '#FFA500', color: '#FFFFFF' }}
            size="large"
          >
            listprofils
          </Button>
        </Link>
      </Box>
      <Box my={2} textAlign="center">
        <Link to="/profils">
          <Button
            variant="contained"
            style={{ backgroundColor: '#f5c8ff', color: '#FFFFFF' }}
            size="large"
          >
            profils
          </Button>
        </Link>
      </Box>
      <Box my={2} textAlign="center">
        <Link to="/myprofil/643b42904f990a71e1475cde">
          <Button
            variant="contained"
            style={{ backgroundColor: '#ffe2ee', color: '#FFFFFF' }}
            size="large"
          >
            myprofilexample
          </Button>
        </Link>
      </Box>
      <Box
        //pt={2}
        style={{
          backgroundColor: '#f2e8f9',
          height: '85vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Add some padding to push the page content below the navbar */}
        <Container maxWidth="sm">
          <Text variant="h3" align="center" gutterBottom>
            Create Your Profile
          </Text>
          <Box my={2} textAlign="center">
            <Link to="/addFreelancerprofil">
              <Button
                variant="contained"
                style={{ backgroundColor: '#FFA500', color: '#FFFFFF' }}
                size="large"
              >
                Create a Freelancer Profile
              </Button>
            </Link>
          </Box>
          <Box my={2} textAlign="center">
            <Link to="/addEmployeur">
              <Button
                variant="contained"
                style={{ backgroundColor: '#FFFFFF', color: '#ddcf7c' }}
                size="large"
              >
                Create an Employer Profile
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}
