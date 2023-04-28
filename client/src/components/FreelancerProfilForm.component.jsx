import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Text, Button, MenuItem, Box } from '@chakra-ui/react';
import { GlobalContext } from '../context/GlobalWrapper';

const categories = [
  { value: 'Development & IT', label: 'Development & IT' },
  { value: 'Design & Creative', label: 'Design & Creative' },
  { value: 'Sales & Marketing', label: 'Sales & Marketing' },
  { value: 'Writing & Translation', label: 'Writing & Translation' },
  { value: 'others', label: 'others' },
];

const FreelancerProfilFormComponent = () => {
  const { FetchProfils, Search, Profils, onOpen, isOpen, onClose } =
    useContext(GlobalContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    FetchProfils();
  }, []);
  const SearchHandler = () => {
    Search(query);
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [categorie, setCategorie] = useState('');
  const [competences, setCompetences] = useState('');
  const [CIN, setCIN] = useState('');
  const [NumCompte, setNumCompte] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [dateNaissance, setDateNaissance] = useState(new Date());
  const [pays, setPays] = useState('');
  const [adresse, setAdresse] = useState('');
  const [prixHour, setPrixHour] = useState(0);

  const handleSubmit = async () => {
    try {
      const FreelancerProfil = {
        firstName,
        lastName,
        categorie,
        competences,
        CIN,
        pays,
        avatar,
        portfolio,
        description,
        phone,
        dateNaissance,
        adresse,
        prixHour,
        NumCompte,
      };
      const response = await axios.post(
        '/addFreelancerprofil',
        FreelancerProfil,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box marginBottom={2}>
        <Text
          required
          label="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          required
          label="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <label htmlFor="avatar">Avatar</label>
        <br />
        <input
          name="Avatar"
          type="file"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
            }
          }}
        />
      </Box>
      <Box marginBottom={2}>
        <label htmlFor="portfolio">Portfolio</label>
        <br />
        <input
          //TextField
          //label="Portfolio"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
            }
          }}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          required
          select
          label="Categorie"
          value={categorie}
          onChange={(event) => setCategorie(event.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Text>
      </Box>
      <Box marginBottom={2}>
        <Text
          required
          label="Competences"
          value={competences}
          onChange={(event) => setCompetences(event.target.value)}
        />
      </Box>

      <Box marginBottom={2}>
        <Text
          label="CIN"
          value={CIN}
          onChange={(event) => setCIN(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          label="NumCompte"
          value={NumCompte}
          onChange={(event) => setNumCompte(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          label="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          type="date"
          label="Date de Naissance"
          value={dateNaissance.toISOString().split('T')[0]}
          onChange={(event) => setDateNaissance(new Date(event.target.value))}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          required
          label="Pays"
          value={pays}
          onChange={(event) => setPays(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          label="Adresse"
          value={adresse}
          onChange={(event) => setAdresse(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <Text
          label="Prix par heure"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          value={prixHour}
          onChange={(event) => setPrixHour(parseFloat(event.target.value))}
        />
      </Box>
      <Box>
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
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default FreelancerProfilFormComponent;
