import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {

  const css = {backgroundColor: props.corSecundaria}

  return (
    <section className="time" style={css}>
      <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>
        <div className='colaboradores'>
            {props.colcaboradores.map(colaborador => <Colaborador
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />)}
        </div>
    </section>
  )
}

export default Time