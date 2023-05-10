import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  Button,
  Divider,
  CircularProgress,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewOffIcon } from '@chakra-ui/icons';

import useInput from '../../hooks/input/use-input';
import {
  validateNameLength,
  validatePasswordLength,
} from '../../shared/utils/validation/length';
import { validateEmail } from '../../shared/utils/validation/email';

import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { register, reset } from './authSlice';
import { useEffect } from 'react';

const RegistrationFormComponent = () => {
  const {
    text: name,
    shouldDisplayError: nameHasError,
    textChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    clearHandler: nameClearHandler,
  } = useInput(validateNameLength);

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

  const {
    text: confirmPassword,
    shouldDisplayError: confirmPasswordHasError,
    textChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    clearHandler: confirmPasswordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    nameClearHandler();
    emailClearHandler();
    passwordClearHandler();
    confirmPasswordClearHandler();
  };

  const dispatch = useAppDispatch();

  const { isLoading, isSuccess } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
      navigate('/signin');
    }
  }, [isSuccess, dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    if (
      nameHasError ||
      emailHasError ||
      passwordHasError ||
      confirmPasswordHasError
    )
      return;

    if (
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    )
      return;

    const newUser = {
      name,
      email,
      password,
    };
    dispatch(register(newUser));
    console.log(newUser);
  };
  if (isLoading)
    return <CircularProgress sx={{ marginTop: '64px' }} color="primary" />;

  return (
    <Box borderWidth="1px" borderColor="#cccccc" p="2" w="350px" mt="2">
      <form onSubmit={onSubmitHandler}>
        <Stack spacing={3}>
          <Text fontSize="xl" fontWeight="semibold">
            Create account
          </Text>

          <Box>
            <Text fontWeight="semibold" mb="1">
              Your name
            </Text>
            <Input
              type="text"
              size="sm"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              error={nameHasError}
              helperText={nameHasError ? 'Enter your name' : ''}
              name="name"
              id="name"
            />
          </Box>

          <Box>
            <Text fontWeight="semibold" mb="1">
              Email
            </Text>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none">
                <EmailIcon />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                error={emailHasError}
                helperText={emailHasError ? 'Enter your email' : ''}
                name="email"
                id="email"
                variant="outlined"
                size="small"
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
                type="password"
                placeholder="Minimum 6 characters required"
                value={password}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                error={passwordHasError}
                helperText={
                  passwordHasError ? 'Minimum 6 characters required' : ''
                }
                name="password"
                id="password"
                variant="outlined"
              />
              <InputRightElement>
                <ViewOffIcon />
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box>
            <Text fontWeight="semibold" mb="1">
              Re-enter password
            </Text>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none">
                <LockIcon />
              </InputLeftElement>
              <Input
                type="password"
                value={confirmPassword}
                onChange={confirmPasswordChangeHandler}
                onBlur={confirmPasswordBlurHandler}
                error={
                  confirmPassword.length > 0 && password !== confirmPassword
                }
                helperText={
                  confirmPassword.length > 0 && password !== confirmPassword
                    ? 'Passwords must match'
                    : ''
                }
              />
              <InputRightElement>
                <ViewOffIcon />
              </InputRightElement>
            </InputGroup>
          </Box>

          <Button
            id="register-btn"
            type="submit"
            bg="#f0c14b"
            color="black"
            borderColor="#a88734 #9c7e31 #846a29"
            _hover={{ bg: '#d8ab2d' }}
            _active={{ bg: '#d8ab2d', borderColor: '#a88734 #9c7e31 #846a29' }}
          >
            Register
          </Button>
        </Stack>
      </form>
      <Stack mt="30px" direction="row" align="center">
        <Text fontSize="sm">
          By creating an account, you agree to freelancy's{' '}
          <Link href="#">Conditions of use</Link> and{' '}
          <Link href="#">Privacy policy</Link>.
        </Text>
      </Stack>
      <Divider my="36px" />
      <Stack direction="row" align="center">
        <Text fontSize="sm">
          Already have an account?{' '}
          <Link to="/signin" color="#0000ee">
            signin
          </Link>
        </Text>
      </Stack>
      <Stack direction="row" align="center" mt="2">
        <Text fontSize="sm">
          Buying for work? <Link href="#">Create a free business acount</Link>.
        </Text>
      </Stack>
    </Box>
  );
};

export default RegistrationFormComponent;
/*

import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const RegistrationFormComponent = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log('Clicked');
  };

  return (
    <Box borderWidth="1px" borderColor="#cccccc" p="2" w="350px" mt="2">
      <form onSubmit={onSubmitHandler}>
        <Stack spacing={3}>
          <Text fontSize="xl" fontWeight="semibold">
            Create account
          </Text>

          <Box>
            <Text fontWeight="semibold" mb="1">
              Your name
            </Text>
            <Input type="text" size="sm" />
          </Box>

          <Box>
            <Text fontWeight="semibold" mb="1">
              Email
            </Text>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none">
                <EmailIcon />
              </InputLeftElement>
              <Input type="email" placeholder="Email address" />
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
                type="password"
                placeholder="Minimum 6 characters required"
              />
              <InputRightElement>
                <ViewOffIcon />
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box>
            <Text fontWeight="semibold" mb="1">
              Re-enter password
            </Text>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none">
                <LockIcon />
              </InputLeftElement>
              <Input type="password" />
              <InputRightElement>
                <ViewOffIcon />
              </InputRightElement>
            </InputGroup>
          </Box>

          <Button
            type="submit"
            bg="#f0c14b"
            color="black"
            borderColor="#a88734 #9c7e31 #846a29"
            _hover={{ bg: '#d8ab2d' }}
            _active={{ bg: '#d8ab2d', borderColor: '#a88734 #9c7e31 #846a29' }}
          >
            Register
          </Button>
        </Stack>
      </form>

      <Stack mt="30px" direction="row" align="center">
        <Text fontSize="sm">
          By creating an account, you agree to freelancy's{' '}
          <Link href="#">Conditions of use</Link> and{' '}
          <Link href="#">Privacy policy</Link>.
        </Text>
      </Stack>

      <Divider my="36px" />

      <Stack direction="row" align="center">
        <Text fontSize="sm">
          Already have an account?{' '}
          <Link to="/signin" color="#0000ee">
            Sign-in
          </Link>
        </Text>
      </Stack>

      <Stack direction="row" align="center" mt="2">
        <Text fontSize="sm">
          Buying for work? <Link href="#">Create a free business acount</Link>.
        </Text>
      </Stack>
    </Box>
  );
};

export default RegistrationFormComponent;
*/
