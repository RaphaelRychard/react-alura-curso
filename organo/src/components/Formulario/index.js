import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        "Data Science",
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preenche os dados para criar o card do colaborador</h2>
                <CampoTexto label="nome" placeholder="Digie seu nome"/>
                <CampoTexto label="cargo" placeholder="Digie seu cargo"/>
                <CampoTexto label="image" placeholder="Digie o endereço da sua imagem"/>
                <ListaSuspensa label="Times" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario