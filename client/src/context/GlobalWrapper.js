import { createContext, useState } from 'react';
import axios from 'axios';
import { useDisclosure, useToast } from '@chakra-ui/react';
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const [Profils, setProfils] = useState([]);
  const [Profil, setProfil] = useState({});
  const [errors, setErrors] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const FetchProfils = () => {
    axios
      .get('/api/profils')
      .then((res) => {
        setProfils(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const Search = (query) => {
    axios
      .post(`/api/Profils/search?key=${query}`)
      .then((res) => {
        setProfils(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const Delete = (id) => {
    axios
      .delete(`/api/profils/${id}`)
      .then((res) => {
        setProfils(Profils.filter((u) => u._id !== id));
        toast({
          title: 'Profil Deleted',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const Add = (form, setForm) => {
    axios
      .post('/api/profils', form)
      .then((res) => {
        setProfils([...Profils, res.data]);
        toast({
          title: 'Profil Added',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const FindOne = async (id) => {
    await axios
      .get(`/api/profils/${id}`)
      .then((res) => {
        setProfil(res.data);
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const Update = (form, setForm, id) => {
    axios
      .put(`/api/profils/${id}`, form)
      .then((res) => {
        toast({
          title: 'Profil Updated',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
        FetchProfils();
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };
  return (
    <GlobalContext.Provider
      value={{
        FetchProfils,
        Search,
        Delete,
        Add,
        FindOne,
        Update,
        Profils,
        onOpen,
        isOpen,
        onClose,
        errors,
        setErrors,
        Profil,
        setProfil,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
