import { ThemeProvider } from '@mui/material';
import { theme } from '../shared/theme';

import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@material-ui/core';

const categories = [
  { value: 'Development & IT', label: 'Development & IT' },
  { value: ' Design & Creative', label: 'Design & Creative' },
  { value: 'Sales & Marketing', label: 'Sales & Marketing' },
  { value: 'Writing & Translation', label: 'Writing & Translation' },
  { value: 'others', label: 'others' },
];

const employeurProfilFormComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <form>
        <Box marginBottom={2}>
          <TextField required label="First Name" />
        </Box>
        <Box marginBottom={2}>
          <TextField required label="Last Name" />
        </Box>
        <Box marginBottom={2}>
          <label htmlFor="avatar">Avatar</label>
          <br />
          <input name="Avatar" type="file" />
        </Box>

        <Box marginBottom={2}>
          <TextField required select label="Categorie">
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box marginBottom={2}>
          <TextField label="Company" />
        </Box>
        <Box marginBottom={2}>
          <TextField label="CIN" />
        </Box>
        <Box marginBottom={2}>
          <TextField label="Description" />
        </Box>
        <Box marginBottom={2}>
          <TextField label="Phone" />
        </Box>
        <Box marginBottom={2}>
          <TextField type="date" label="Date de Naissance" />
        </Box>
        <Box marginBottom={2}>
          <TextField required label="Pays" />
        </Box>
        <Box marginBottom={2}>
          <TextField label="Adresse" />
        </Box>

        <Box>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default employeurProfilFormComponent;
