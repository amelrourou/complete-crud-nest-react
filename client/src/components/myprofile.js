import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MyProfil = () => {
  const [profil, setProfil] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProfil = async () => {
      const res = await axios.get(`/api/profils/${id}`);
      setProfil(res.data);
    };
    fetchProfil();
  }, [id]);

  if (!profil) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profil.firstName}</h1>
      <p>categorie: {profil.categorie}</p>
      <p>phone: {profil.phone}</p>
      <p>Address: {profil.address}</p>
    </div>
  );
};

export default MyProfil;
