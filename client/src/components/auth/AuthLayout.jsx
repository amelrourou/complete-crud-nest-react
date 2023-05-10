import { Grid } from '@chakra-ui/react';
import { ReactNode } from 'react';

const AuthLayout = ({ children }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
      >
        <img src="freelancynew.png" alt="freelancy" height="40px" />
      </div>
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
