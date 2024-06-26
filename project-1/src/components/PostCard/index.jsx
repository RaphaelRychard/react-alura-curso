import './styles.css';
import P from 'prop-types';

export const PostCard = ({ cover, title, id, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
};
