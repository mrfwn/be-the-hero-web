import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Container, Section, Form } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIndent(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };
    history.push('/profile');
    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente');
    }
  }
  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Logo Hero" />
        <h1>Cadastrar novo caso</h1>
        <p>
          Descreva o caso detalhadamente para encontrar um herói para resolver
          isso.
        </p>
        <Link to="/profile">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar para home
        </Link>
      </Section>
      <Form onSubmit={handleNewIndent}>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Valor em reais"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
