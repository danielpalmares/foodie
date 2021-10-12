import { useState } from 'react';
import { SubmitButton } from '../SubmitButton';
import { AppInput } from '../AppInput';
import { Form } from './styles';

export function LoginForm({ handleGetData }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) return;

    return handleGetData({ username, password });
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <AppInput
        label="Digite seu nome de usuário"
        inputType="text"
        inputId="username"
        placeholder="Nome de usuário"
        handleChange={e => setUsername(e.target.value)}
        isRequired
      />

      <AppInput
        label="Digite sua senha"
        inputType="password"
        inputId="password"
        placeholder="Senha"
        handleChange={e => setPassword(e.target.value)}
        isRequired
      />

      <SubmitButton>Entrar</SubmitButton>
    </Form>
  );
}
