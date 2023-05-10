import { Flex } from '@chakra-ui/react';
import AuthLayout from '../components/auth/AuthLayout';
import SigninFormComponent from '../components/auth/SigninForm.component';

const SigninPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <AuthLayout>
        <SigninFormComponent />
      </AuthLayout>
    </Flex>
  );
};

export default SigninPage;
