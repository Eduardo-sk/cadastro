import { useState } from "react";
import '../index.css';

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function cadastrarUsuario(event) {
    event.preventDefault();
    console.log(`User: ${name} cadastrado com a senha: ${password}`);
    console.log("Cadastrou com Sucesso!!");

    alert(`Usuário ${name} cadastrado com sucesso!`);
  }

  return (
    <>
      <h1>Meu Cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div className="form">
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome!"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form">
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua Senha:"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="formInput">
          <input id="input" type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;
