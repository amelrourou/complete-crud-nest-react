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
  const [FreelancerProfils, setFreelancerProfils] = useState([]);
  const [FreelancerProfil, setFreelancerProfil] = useState({});
  const [ClientProfils, setClientProfils] = useState([]);
  const [ClientProfil, setClientProfil] = useState({});

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

  const FetchFreelancerProfils = () => {
    axios
      .get('/api/Freelancerprofils')
      .then((res) => {
        setFreelancerProfils(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const FetchClientProfils = () => {
    axios
      .get('/api/Clientprofils')
      .then((res) => {
        setClientProfils(res.data);
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

  const SearchFreelancer = (query) => {
    axios
      .post(`/api/FreelancerProfils/search?key=${query}`)
      .then((res) => {
        setFreelancerProfils(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const SearchClient = (query) => {
    axios
      .post(`/api/ClientProfils/search?key=${query}`)
      .then((res) => {
        setClientProfils(res.data);
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

  const DeleteFreelancer = (id) => {
    axios
      .delete(`/api/Freelancerprofils/${id}`)
      .then((res) => {
        setFreelancerProfils(FreelancerProfils.filter((u) => u._id !== id));
        toast({
          title: 'FreelancerProfil Deleted',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const DeleteClient = (id) => {
    axios
      .delete(`/api/Clientprofils/${id}`)
      .then((res) => {
        setClientProfils(ClientProfils.filter((u) => u._id !== id));
        toast({
          title: 'ClientProfil Deleted',
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

  const AddFreelancerProfil = (form, setForm) => {
    axios
      .post('/api/Freelancerprofils', form)
      .then((res) => {
        setFreelancerProfils([...FreelancerProfils, res.data]);
        toast({
          title: 'FreelancerProfil Added',
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

  const AddClientProfil = (form, setForm) => {
    axios
      .post('/api/Clientprofils', form)
      .then((res) => {
        setClientProfils([...ClientProfils, res.data]);
        toast({
          title: 'ClientProfil Added',
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

  const FindaFreelancer = async (id) => {
    await axios
      .get(`/api/Freelancerprofils/${id}`)
      .then((res) => {
        setFreelancerProfil(res.data);
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const FindaClient = async (id) => {
    await axios
      .get(`/api/Clientprofils/${id}`)
      .then((res) => {
        setClientProfil(res.data);
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

  const UpdateFreelancer = (form, setForm, id) => {
    axios
      .put(`/api/Freelancerprofils/${id}`, form)
      .then((res) => {
        toast({
          title: 'FreelancerProfil Updated',
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

  const UpdateClient = (form, setForm, id) => {
    axios
      .put(`/api/Clientprofils/${id}`, form)
      .then((res) => {
        toast({
          title: 'ClientProfil Updated',
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
        UpdateFreelancer,
        SearchFreelancer,
        AddFreelancerProfil,
        FetchFreelancerProfils,
        FreelancerProfil,
        FreelancerProfils,
        FindaFreelancer,
        DeleteFreelancer,
        FetchClientProfils,
        ClientProfil,
        ClientProfils,
        FindaClient,
        DeleteClient,
        UpdateClient,
        AddClientProfil,
        SearchClient,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
