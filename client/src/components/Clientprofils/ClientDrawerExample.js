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
  InputGroup,
  Stack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import InputsGroup from '../InputsGroup';
import { GlobalContext } from '../../context/GlobalWrapper';

export default function ClientDrawerExample() {
  const {
    onOpen,
    
    isOpen,
    onClose,
    AddClientProfil,
    errors,
    setErrors,
    ClientProfil,
    UpdateClient,
  } = useContext(GlobalContext);
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
                name="company"
                onChangeHandler={onChangeHandler}
                value={form?.company}
                errors={errors?.company}
              />
              <InputsGroup
                placeholder="teel us about u "
                name="Bio"
                label="Bio"
                onChangeHandler={onChangeHandler}
                value={form?.Bio}
                errors={errors?.Bio}
              />

              <InputsGroup
                name="picture"
                onChangeHandler={onChangeHandler}
                value={form?.picture}
                errors={errors?.picture}
              />

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
                name="Avis"
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
/*<InputGroup
                name="categorie"
                label="Categorie"
                placeholder="Select category"
                onChangeHandler={onChangeHandler}
                value={form?.categorie}
                errors={errors?.categorie}
*/
