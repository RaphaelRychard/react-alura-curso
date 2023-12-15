import './Botao.css';

const index = (props) => {
  return (
    <button className="botao">
      {props.children}
    </button>
  )
}

export default index