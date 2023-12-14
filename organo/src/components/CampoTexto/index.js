import './CampoTexto.css'

const Index = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input type="text"
                   name={`input_${props.label}`}
                   id={props.label}
                   placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Index