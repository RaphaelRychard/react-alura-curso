import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {

  const css = {backgroundColor: props.corSecundaria}

  return (props.colcaboradores.length > 0 && <section className="time" style={css}>
    <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>
    <div className='colaboradores'>
      {props.colcaboradores.map(colaborador => <Colaborador
        corDeFundo={props.corPrimaria}
        key={colaborador.nome}
        nome={colaborador.nome}
        cargo={colaborador.cargo}
        imagem={colaborador.imagem}
      />)}
    </div>
  </section>)
}

export default Time