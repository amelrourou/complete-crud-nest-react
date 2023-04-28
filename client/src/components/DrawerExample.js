import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';

export default function DrawerExample() {
  const { onOpen, isOpen, onClose, Add, errors, setErrors, Profil, Update } =
    useContext(GlobalContext);
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () => {
    Add(form, setForm);
  };

  const onUpdate = () => {
    Update(form, setForm, form._id);
  };

  useEffect(() => {
    setForm(Profil);
  }, [Profil]);
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            onClick={() => {
              onClose();
              setErrors({});
              setForm({});
            }}
          />
          <DrawerHeader>Create / Update Profil</DrawerHeader>

          <DrawerBody>
            <Stack spacing={'24px'}>
              <InputsGroup
                name="firstName"
                onChangeHandler={onChangeHandler}
                value={form?.firstName}
                errors={errors?.firstName}
              />
              <InputsGroup
                name="lastName"
                onChangeHandler={onChangeHandler}
                value={form?.lastName}
                errors={errors?.lastName}
              />
              <InputsGroup
                name="categorie"
                onChangeHandler={onChangeHandler}
                value={form?.categorie}
                errors={errors?.categorie}
              />
              <InputsGroup
                name="competences"
                onChangeHandler={onChangeHandler}
                value={form?.competences}
                errors={errors?.competences}
              />
              <InputsGroup
                name="CIN"
                onChangeHandler={onChangeHandler}
                value={form?.CIN}
                errors={errors?.CIN}
              />
              <InputsGroup
                name="pays"
                onChangeHandler={onChangeHandler}
                value={form?.pays}
                errors={errors?.pays}
              />
              <InputsGroup
                name="avatar"
                onChangeHandler={onChangeHandler}
                value={form?.avatar}
                errors={errors?.avatar}
              />
              <InputsGroup
                name="portfolio"
                onChangeHandler={onChangeHandler}
                value={form?.portfolio}
                errors={errors?.portfolio}
              />
              <InputsGroup
                name="pricebyhour"
                onChangeHandler={onChangeHandler}
                value={form?.pricebyhour}
                errors={errors?.pricebyhour}
              />

              <InputsGroup
                name="description"
                onChangeHandler={onChangeHandler}
                value={form?.description}
                errors={errors?.description}
              />
              <InputsGroup
                name="phone"
                onChangeHandler={onChangeHandler}
                value={form?.phone}
                errors={errors?.phone}
              />
              <InputsGroup
                name="dateNaissance"
                onChangeHandler={onChangeHandler}
                value={form?.dateNaissance}
                errors={errors?.dateNaissance}
              />
              <InputsGroup
                name="adresse"
                onChangeHandler={onChangeHandler}
                value={form?.adresse}
                errors={errors?.adresse}
              />
              <InputsGroup
                name="NumCompte"
                onChangeHandler={onChangeHandler}
                value={form?.NumCompte}
                errors={errors?.NumCompte}
              />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
                setErrors({});
                setForm({});
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => (form._id ? onUpdate() : onAdd())}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
