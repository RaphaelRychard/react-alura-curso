import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import {useState} from "react";

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    props.aoColaboradorCadatrado(({
      nome, cargo, imagem, time
    }))
    setNome('')
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (<section className="formulario">
    <form onSubmit={aoSalvar}>
      <h2>Preenche os dados para criar o card do colaborador</h2>

      <CampoTexto
        required={true}
        label="nome"
        placeholder="Digie seu nome"
        valor={nome}
        aoAlterado={valor => setNome(valor)}
      />

      <CampoTexto
        required={true}
        label="cargo"
        placeholder="Digie seu cargo"
        valor={cargo}
        aoAlterado={valor => setCargo(valor)}
      />

      <CampoTexto
        label="image"
        placeholder="Digie o endereço da sua imagem"
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
      />

      <ListaSuspensa
        required={true}
        label="Times"
        itens={props.times}
        valor={time}
        aoAlterado={valor => setTime(valor)}
      />

      <Botao>
        Criar Card
      </Botao>
    </form>
  </section>)
}

export default Formulario