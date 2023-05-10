import { EmailIcon, LockIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import useInput from '../../hooks/input/use-input';
import { validateEmail } from '../../shared/utils/validation/email';
import { validatePasswordLength } from '../../shared/utils/validation/length';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { login, reset } from './authSlice';
import { LoginUser } from './models/LoginUser.interface';

const SigninFormComponent = () => {
  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const dispatch = useAppDispatch();

  const { isLoading, isSuccess, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (!isAuthenticated) return;
    navigate('/');
  }, [isAuthenticated]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (emailHasError || passwordHasError) return;

    if (email.length === 0 || password.length === 0) return;

    const loginUser = { email, password };

    dispatch(login(loginUser));
  };

  if (isLoading)
    return <CircularProgress sx={{ marginTop: '64px' }} color="primary" />;

  return (
    <>
      <Box borderWidth={1} borderColor="#cccccc" p={2} width="350px" mt={2}>
        <form onSubmit={onSubmitHandler}>
          <Grid gridGap={2}>
            <Heading as="h1" size="md">
              Sign-In
            </Heading>

            <Box>
              <Text fontWeight="semibold" mb="1">
                Email
              </Text>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none">
                  <EmailIcon />
                </InputLeftElement>
                <Input
                  value={email}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  error={emailHasError}
                  helperText={emailHasError ? 'Enter your email' : ''}
                  type="email"
                  name="email"
                  id="email"
                  variant="outlined"
                  size="small"
                  placeholder="Email address"
                />
              </InputGroup>
            </Box>

            <Box>
              <Text fontWeight="semibold" mb="1">
                Password
              </Text>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none">
                  <LockIcon />
                </InputLeftElement>
                <Input
                  value={password}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  error={passwordHasError}
                  helperText={
                    passwordHasError ? 'Minimum 6 characters required' : ''
                  }
                  type="password"
                  name="password"
                  id="password"
                  variant="outlined"
                  size="small"
                  placeholder="Minimum 6 characters required"
                />
                <InputRightElement>
                  <ViewOffIcon />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Button
              id="signin-btn"
              disabled={
                !validatePasswordLength(password) || !validateEmail(email)
              }
              type="submit"
              colorScheme="yellow"
              size="sm"
              mt={4}
              textTransform="none"
            >
              Sign-In
            </Button>
          </Grid>
        </form>

        <Box mt={4}>
          <Text fontSize="sm">
            By continuing, you agree to freelancy's{' '}
            <Link href="#" textDecoration="underline">
              Conditions of use
            </Link>{' '}
            and{' '}
            <Link href="#" textDecoration="underline">
              Privacy policy
            </Link>
          </Text>
        </Box>
      </Box>
      <Box mt={4}>
        <hr />
        <Text fontSize="sm" color="#767676">
          New to freelancy?
        </Text>
        <Link to="/register" textDecoration="none">
          <Button
            size="sm"
            width="100%"
            mt={2}
            variant="outline"
            textTransform="none"
          >
            Register
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default SigninFormComponent;
