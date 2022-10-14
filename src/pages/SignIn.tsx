import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';
import axios from 'axios';

import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

import { Logo } from '../Logo';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'rafaelsousa.souza@gmail.com',
      password: 'secret',
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading
          size="lg"
          className="mt-4"
        >
          Ignite Lab
        </Heading>

        <Text
          size="lg"
          className="text-gray-400 font-normal"
        >
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="w-full max-w-[400px] flex flex-col mt-10 items-stretch gap-4"
      >
        { isUserSignedIn && <Text>Login realizado com sucesso!</Text> }

        <label
          htmlFor="email"
          className="flex flex-col gap-3"
        >
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              placeholder="Digite seu e-mail"
              type="email"
            />
          </TextInput.Root>
        </label>

        <label
          htmlFor="password"
          className="flex flex-col gap-3"
        >
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              placeholder="************"
              type="password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex flex-row items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button
          className="mt-4"
          type="submit"
        >
          <Text className="font-semibold">
            Entrar na plataforma
          </Text>
        </Button>

        <footer className="flex flex-col items-center mt-4 gap-4">
          <Text
            size="sm"
            className="text-gray-400 underline hover:text-gray-200 transition-colors"
          >
            <a href="#">Esqueceu sua senha?</a>
          </Text>

          <Text
            size="sm"
            className="text-gray-400 underline hover:text-gray-200 transition-colors"
          >
            <a href="#">Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </form>
    </div>
  );
}