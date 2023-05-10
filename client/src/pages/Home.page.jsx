import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

import { useEffect } from 'react';
import { logout, selectedUser } from '../components/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks';

export default function Home() {
  const dispatch = useAppDispatch();

  const { user, jwt } = useAppSelector(selectedUser);

  useEffect(() => {
    console.log(123, user, jwt);
  }, [user]);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Button onClick={logoutHandler}>Logout</Button>
        {user?.email}
      </div>
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

      <Box my={2} textAlign="center">
        <Link to="/Freelancerprofils">
          <Button
            variant="contained"
            style={{ backgroundColor: '#f5c8ff', color: '#FFFFFF' }}
            size="large"
          >
            Freelancerprofils
          </Button>
        </Link>
      </Box>

      <Box my={2} textAlign="center">
        <Link to="/listFreelancerprofils">
          <Button
            variant="contained"
            style={{ backgroundColor: '#FFA500', color: '#FFFFFF' }}
            size="large"
          >
            listFreelancerprofils
          </Button>
        </Link>
      </Box>

      <Box my={2} textAlign="center">
        <Link to="/myFreelancerprofil/644c87aea8b2f4d45b76d03b">
          <Button
            variant="contained"
            style={{ backgroundColor: '#ffe2ee', color: '#FFFFFF' }}
            size="large"
          >
            myFreelancerprofilexample
          </Button>
        </Link>
      </Box>

      <Box my={2} textAlign="center">
        <Link to="/Clientprofils">
          <Button
            variant="contained"
            style={{ backgroundColor: '#f5c8ff', color: '#FFFFFF' }}
            size="large"
          >
            Clientprofils
          </Button>
        </Link>
      </Box>

      <Box my={2} textAlign="center">
        <Link to="/listClientprofils">
          <Button
            variant="contained"
            style={{ backgroundColor: '#FFA500', color: '#FFFFFF' }}
            size="large"
          >
            listClientprofils
          </Button>
        </Link>
      </Box>

      <Box my={2} textAlign="center">
        <Link to="/myClientprofil/6450e0b44402df0521d2e91c">
          <Button
            variant="contained"
            style={{ backgroundColor: '#ffe2ee', color: '#FFFFFF' }}
            size="large"
          >
            myClientprofilexample
          </Button>
        </Link>
      </Box>

      <Box my={2} textAlign="center">
        <Link to="/addprofil">
          <Button
            variant="contained"
            style={{ backgroundColor: '#ffee', color: '#black' }}
            size="large"
          >
            Get started
          </Button>
        </Link>
      </Box>
    </>
  );
}
