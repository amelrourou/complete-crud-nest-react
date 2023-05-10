import React, { useContext, useEffect, useState } from 'react';

import {
  Text,
  Button,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Container,
} from '@chakra-ui/react';

import InputsGroup from '../InputsGroup';
import { GlobalContext } from '../../context/GlobalWrapper';

const ClientProfilFormComponent = () => {
  const { AddClientProfil, errors, setErrors, ClientProfil, UpdateClient } =
    useContext(GlobalContext);

  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () => {
    AddClientProfil(form, setForm);
  };

  const onUpdate = () => {
    UpdateClient(form, setForm, form._id);
  };

  useEffect(() => {
    setForm(ClientProfil);
  }, [ClientProfil]);

  return (
    <Container maxW="container.sm">
      <Box as="form">
        <Box mb={4}>
          <FormControl isRequired isInvalid={!!errors.firstName}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              value={form?.firstName}
              onChange={onChangeHandler}
            />
            <FormErrorMessage>{errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.lastName}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              value={form?.lastName}
              onChange={onChangeHandler}
            />
            <FormErrorMessage>{errors.lastName}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box mb={4}>
          <FormControl isInvalid={!!errors.company}>
            <FormLabel htmlFor="company">company</FormLabel>
            <Input
              type="text"
              name="company"
              id="company"
              value={form?.company}
              onChange={onChangeHandler}
            />
            <FormErrorMessage>{errors.company}</FormErrorMessage>
          </FormControl>
        </Box>

        <FormControl mb={4} isInvalid={!!errors.bio}>
          <FormLabel htmlFor="bio">Bio</FormLabel>
          <Textarea
            name="bio"
            id="bio"
            placeholder="Tell us about yourself"
            value={form?.bio}
            onChange={onChangeHandler}
          />
          <FormErrorMessage>{errors.bio}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.picture}>
          <FormLabel htmlFor="picture">Picture</FormLabel>
          <Input
            type="file"
            name="picture"
            id="picture"
            onChange={onChangeHandler}
          />
          <FormErrorMessage>{errors.picture}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.pays}>
          <FormLabel htmlFor="pays">pays</FormLabel>
          <Input
            type="text"
            name="pays"
            id="pays"
            value={form?.pays}
            onChange={onChangeHandler}
          />
          <FormErrorMessage>{errors.pays}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.address}>
          <FormLabel htmlFor="address">address</FormLabel>
          <Input
            type="text"
            name="address"
            id="address"
            value={form?.address}
            onChange={onChangeHandler}
          />
          <FormErrorMessage>{errors.address}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.CIN}>
          <FormLabel htmlFor="CIN">CIN</FormLabel>
          <Input
            type="number"
            name="CIN"
            id="CIN"
            value={form?.CIN}
            onChange={onChangeHandler}
          />
          <FormErrorMessage>{errors.CIN}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.NumCompt}>
          <FormLabel htmlFor="NumCompt">NumCompt</FormLabel>
          <Input
            type="number"
            name="NumCompt"
            id="NumCompt"
            value={form?.NumCompt}
            onChange={onChangeHandler}
          />
          <FormErrorMessage>{errors.NumCompt}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.phone}>
          <FormLabel htmlFor="phone">phone</FormLabel>
          <Input
            type="number"
            name="phone"
            id="phone"
            value={form?.phone}
            onChange={onChangeHandler}
          />
          <FormErrorMessage>{errors.phone}</FormErrorMessage>
        </FormControl>

        <InputsGroup
          name="Birthdate"
          label="Birthdate"
          type="date"
          onChangeHandler={onChangeHandler}
          value={form?.Birthdate}
          errors={errors?.Birthdate}
        />

        <InputsGroup
          name="Avis"
          type="number"
          onChangeHandler={onChangeHandler}
          value={form?.Avis}
          errors={errors?.Avis}
        />
        <InputsGroup
          name="status"
          label="status"
          placeholder="Select status"
          onChangeHandler={onChangeHandler}
          value={form?.status}
          errors={errors?.status}
        />

        <Button
          id="createprofill-btn"
          variant="contained"
          style={{
            marginTop: '16px',
            height: '31px',
            backgroundColor: '#f0c14b',
            color: 'black',
            borderColor: '#a88734 #9c7e31 #846a29',
            textTransform: 'none',
          }}
          type="submit"
          onClick={() => (form._id ? onUpdate() : onAdd())}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ClientProfilFormComponent;
