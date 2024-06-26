import React from 'react';
import {useRouter} from "next/router";
import {authService} from "../src/services/auth/authService";

export default function HomeScreen() {
  // Hoock do Next JS para redirecionamento
  const router = useRouter();
  const [values, setValues] = React.useState({
    usuario: 'omariosouto',
    senha: 'safepassword',
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      }
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event) => {
        // fazer login é bater numa API de forma ASYNC
        authService
          .login({
            username: values.usuario,
            password: values.senha
          })
          .then(() => {
            router.push('/auth-page-ssr')
          })
          .catch(() => {
            alert('Usuário ou Senha estão Invalidos')
          })
        // router.push('/auth-page-ssr')
        event.preventDefault();
      }}>
        <input
          placeholder="Usuário"
          name="usuario"
          type="text"
          value={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          value={values.senha}
          onChange={handleChange}
        />

        <pre>
          {
            JSON.stringify(
              values,
              null,
              2
            )
          }
        </pre>
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
      <style global jsx>{`
        body {
          background: #202124;
          color: white;
        }
      `}</style>
    </div>


  );
}
