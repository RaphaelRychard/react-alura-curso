import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

  return (<div className="lista-sustepensa">
    <label>{props.label}</label>
    <select required={props.required}
            onChange={event => props.aoAlterado(event.target.value)}>
      {props.itens.map(item => <option key={item}>{item}</option>)}
    </select>
  </div>)
}

export default ListaSuspensa