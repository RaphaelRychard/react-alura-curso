import P from 'prop-types';
import { PostsContext } from './context';

export const PostsProviders = ({ children }) => {
  return <PostsContext.Provider>{children}</PostsContext.Provider>;
};

PostsProviders.propTypes = {
  children: P.node.isRequired,
};
