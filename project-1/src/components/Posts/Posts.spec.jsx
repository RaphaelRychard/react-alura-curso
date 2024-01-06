import {render, screen} from "@testing-library/react";
import {Posts} from "./index";

const props = {
  posts: [
    {
      id: 1,
      title: 'Title 1',
      body: 'Body 1',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      title: 'Title 2',
      body: 'Body 2',
      cover: 'img/img2.png',
    },
    {
      id: 3,
      title: 'Title 3',
      body: 'Body 3',
      cover: 'img/img3.png',
    },
  ]
}

describe('<Posts />', () => {
  it('should render Posts', () => {
    // const {debug} =  render(<Posts {...props} />);
    // debug();

    render(<Posts {...props} />);
    expect(screen.getAllByRole('heading', {name: /title/i}))
      .toHaveLength(3);

    expect(screen.getAllByRole('img', {name: /title/i}))
      .toHaveLength(3);

    expect(screen.getAllByRole('heading', {name: /title/i}))
      .toHaveLength(3);

    expect(screen.getAllByText(/body/i))
      .toHaveLength(3);

    expect(screen.getByRole('img', {name: /title 3/i}))
      .toHaveAttribute('src', 'img/img3.png');
  });

  it('should match snapshot', () => {
    const {container} = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
})