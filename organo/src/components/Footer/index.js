import './Footer.css'

const Footer = (props) => {
  return (<footer className='footer'>

    <div className="icons">
      <a href='#'><img src="/imagens/fb.png" alt="Fecebook"/></a>
      <a href='#'> <img src="/imagens/ig.png" alt="Instagram"/></a>
      <a href='#'> <img src="/imagens/tw.png" alt="Twiter"/></a>
    </div>

    <div>
      <img src="/imagens/logo.png" alt='Logo do Organo'/>
    </div>

    <div>
      <p>{props.cridador}</p>
    </div>
  </footer>)
}

export default Footer