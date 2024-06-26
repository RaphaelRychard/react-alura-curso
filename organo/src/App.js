import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import {useState} from "react";
import Time from "./components/Time";
import Footer from "./components/Footer";

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradors] = useState([])

  const aoNovoColaboradorAdionado = (colaborador) => {
    debugger
    setColaboradors([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadatrado={colaborador => aoNovoColaboradorAdionado(colaborador)}/>
      {times.map(time => <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colcaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Footer cridador='Desenvolvido por Alura' />


    </div>
  );
}

export default App;
