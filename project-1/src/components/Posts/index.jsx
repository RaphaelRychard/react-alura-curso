import P from 'prop-types';
import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {!!posts &&
        posts.map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} body={post.body} cover={post.cover} />
        ))}
    </div>
  );
};

Posts.defaultProps = { posts: [] };

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      cover: P.string.isRequired,
      id: P.number.isRequired,
      title: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};
