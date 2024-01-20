import React from 'react';
export default function HomeScreen() {

  const [values, setValues] = React.useState({
    usuario: 'Raphael Rychard',
    senha: 'safepassword'
  });

  function handleChange (event) {
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
      <form>
        <input
          placeholder="Usuário" name="usuario"
          value={values.usuario} onChange={handleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.senha} onChange={handleChange}
        />

        <pre>
          {JSON.stringify(values, null, 2)}
        </pre>
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
