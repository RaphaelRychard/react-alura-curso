import {render, screen} from "@testing-library/react";
import {SearchInput} from ".";
import userEvent from "@testing-library/user-event";

describe('<SearchInput />', () => {
  it('should have value of searchValue', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={'testando'}/>);

    const input = screen.getByPlaceholderText(/Type your search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn}/>);
    const input = screen.getByPlaceholderText(/Type your search/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });


  it('should match snapshot', () => {
    const {container} = render(<SearchInput/>);
    expect(container).toMatchSnapshot();
  });
})