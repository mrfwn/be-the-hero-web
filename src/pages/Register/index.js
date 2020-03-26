import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Container, Section, Form } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();
  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };
    try {
      const response = await api.post('/ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert(`Erro no cadastro, tente novamente`);
    }
  };
  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Logo Hero" />
        <h1>Faça seu Logon</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG
        </p>
        <Link to="/">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar para o logon
        </Link>
      </Section>
      <Form onSubmit={handleRegister}>
        <input
          placeholder="Nome da ONG"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Whatsapp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
        <div>
          <input
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            placeholder="UF"
            style={{ width: 80 }}
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}