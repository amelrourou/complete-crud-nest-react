import { Box, Button, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/components/navbar';
import CategoriesNavbar from '../shared/components/categoriesNavbar';

const CreateProfilePage = () => {
  return (
    <>
      <Navbar />

      <CategoriesNavbar />
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
            <Link to="/addClientprofil">
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
};

export default CreateProfilePage;
