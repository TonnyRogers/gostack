import React from 'react';
import { Link } from 'react-router-dom';

import history from '~/services/history';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Criar Conta</button>
        <Link to="/">Ja tem uma conta?</Link>
      </form>
    </>
  );
}
