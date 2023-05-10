import { Flex } from '@chakra-ui/react';
import AuthLayout from '../components/auth/AuthLayout';
import RegistrationFormComponent from '../components/auth/RegistrationForm.component';

const RegisterPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <AuthLayout>
        <RegistrationFormComponent />
      </AuthLayout>
    </Flex>
  );
};

export default RegisterPage;
