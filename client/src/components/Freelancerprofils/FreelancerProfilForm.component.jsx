import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
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

const FreelancerProfilFormComponent = () => {
  const {
    AddFreelancerProfil,
    errors,
    setErrors,
    FreelancerProfil,
    UpdateFreelancer,
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () => {
    AddFreelancerProfil(form, setForm);
  };

  const onUpdate = () => {
    UpdateFreelancer(form, setForm, form._id);
  };

  useEffect(() => {
    setForm(FreelancerProfil);
  }, [FreelancerProfil]);

  return (
    <Container maxW="container.sm" color="#262626">
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
          <FormControl isRequired isInvalid={!!errors.category}>
            <FormLabel htmlFor="category">Category</FormLabel>
            <InputsGroup
              name="categorie"
              id="categorie"
              placeholder="Select category"
              onChangeHandler={onChangeHandler}
              value={form?.categorie}
            />
            <FormErrorMessage>{errors.category}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.skills}>
            <FormLabel htmlFor="skills">Skills</FormLabel>
            <Input
              type="text"
              name="skills"
              id="skills"
              value={form?.skills}
              onChange={onChangeHandler}
            />
            <FormErrorMessage>{errors.skills}</FormErrorMessage>
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

        <FormControl isInvalid={!!errors.cv}>
          <FormLabel htmlFor="cv">CV</FormLabel>
          <Input type="file" name="cv" id="cv" onChange={onChangeHandler} />
          <FormErrorMessage>{errors.CV}</FormErrorMessage>
        </FormControl>

        <InputsGroup
          name="pays"
          onChangeHandler={onChangeHandler}
          value={form?.pays}
          errors={errors?.pays}
        />
        <InputsGroup
          name="address"
          onChangeHandler={onChangeHandler}
          value={form?.address}
          errors={errors?.address}
        />
        <InputsGroup
          name="CIN"
          onChangeHandler={onChangeHandler}
          value={form?.CIN}
          errors={errors?.CIN}
        />
        <InputsGroup
          name="NumCompt"
          onChangeHandler={onChangeHandler}
          value={form?.NumCompt}
          errors={errors?.NumCompt}
        />
        <InputsGroup
          name="phone"
          type="int"
          onChangeHandler={onChangeHandler}
          value={form?.phone}
          errors={errors?.phone}
        />
        <InputsGroup
          name="Birthdate"
          label="Birthdate"
          type="date"
          onChangeHandler={onChangeHandler}
          value={form?.Birthdate}
          errors={errors?.Birthdate}
        />
        <InputsGroup
          name="priceperhour"
          onChangeHandler={onChangeHandler}
          value={form?.priceperhour}
          errors={errors?.priceperhour}
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
          id="createprofil-btn"
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

export default FreelancerProfilFormComponent;

/*import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
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
  GridItem,
  Select,
  Grid,
} from '@chakra-ui/react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';

const FreelancerProfilFormComponent = () => {
  const {
    AddFreelancerProfil,
    errors,
    setErrors,
    FreelancerProfil,
    UpdateFreelancer,
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () => {
    AddFreelancerProfil(form, setForm);
  };

  const onUpdate = () => {
    UpdateFreelancer(form, setForm, form._id);
  };

  useEffect(() => {
    setForm(FreelancerProfil);
  }, [FreelancerProfil]);

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={6}>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            name="firstName"
            value={form?.firstName}
            onChange={onChangeHandler}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastName"
            value={form?.lastName}
            onChange={onChangeHandler}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl isRequired>
          <FormLabel>Category</FormLabel>
          <Select
            name="categorie"
            placeholder="Select category"
            value={form?.categorie}
            onChange={onChangeHandler}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl isRequired>
          <FormLabel>Skills</FormLabel>
          <Input
            name="skills"
            value={form?.skills}
            onChange={onChangeHandler}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={12}>
        <FormControl>
          <FormLabel>Bio</FormLabel>
          <Textarea
            name="Bio"
            value={form?.Bio}
            onChange={onChangeHandler}
            placeholder="Tell us about yourself"
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl>
          <FormLabel>Picture</FormLabel>
          <Input
            name="picture"
            value={form?.picture}
            onChange={onChangeHandler}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl>
          <FormLabel>CV</FormLabel>
          <Input name="CV" value={form?.CV} onChange={onChangeHandler} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl isRequired>
          <FormLabel>Country</FormLabel>
          <Input name="pays" value={form?.pays} onChange={onChangeHandler} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            value={form?.address}
            onChange={onChangeHandler}
          />
        </FormControl>
      </GridItem>
      /
    </Grid>
  );
};

export default FreelancerProfilFormComponent;
*/
