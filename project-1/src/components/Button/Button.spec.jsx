// importa o render de test e o screen
import {fireEvent, render, screen} from "@testing-library/react";

// importa o button
import {Button} from "./index";
import userEvent from "@testing-library/user-event";
import {PostCard} from "../PostCard";

describe('<Button />', () => {
  it('should render the button with the text "Load More"', () => {

    // renderiza o botão de teste
    render  (<Button text='Load More' />);

    // query -> posso buscar um elemento que não esteja na tela.
    // get -> vai ser usado quando sabermos que tem um elemento na tela e queremos buscar alguma coisa

    const button = screen.getByRole('button', {name: /Load More/i });

    // expero que um expect correu, mais comuns em teste assincronos
    expect.assertions(1);

    // verifica se o atributo class exisite com o valr button
    // expect(button).toHaveAttribute('class', 'button')

    // verifica se botão existe na tela
    expect(button).toBeInTheDocument()
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render  (<Button text='Load More' onClick={fn} />);

    const button = screen.getByRole('button', {name: /Load More/i });

    // verifica se o botao teve o click
    // fireEvent.click(button)

    // pode usar a userEvent mesma coisa que fireEvent que verifica se o button foi clicado
    userEvent.click(button)

    // verifica se a função clicada no botao foi chamada
    // expect(fn).toHaveBeenCalled()

    // se quero saber quantas vezes foi chamada usa funcao abaixo e passa quantas vezes
    expect(fn).toHaveBeenCalledTimes(1)
  });


  it('should be disabled when disabled is true', () => {
    render  (<Button text='Load More' disabled={true} />);

    //.not.toBeDisabled() ou toBeDisabled -> verifica se o botão está desativado
    expect(screen.getByRole('button', {name: /Load More/i }))
      .toBeDisabled()
  });

  it('should be disabled when disabled is false', () => {
    render  (<Button text='Load More' disabled={false} />);

    // verifica se está ativado -> toBeEnabled
    expect(screen.getByRole('button', {name: /Load More/i }))
      .toBeEnabled()
  });

  it('should match snapshot', () => {
    const { container } =  render  (<Button text='Load More' disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();

  });



})