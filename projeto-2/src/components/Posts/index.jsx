import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { CounterContexts } from '../../contexts/CounterProviders/context';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProviders/actions';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContexts);
  // eslint-disable-next-line  no-unused-vars
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    if (isMounted.current) {
      loadPosts(postsDispatch).then((dispatch) => {
        dispatch();
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>POSTS</h1>
      <div>
        <h3>Counter</h3>
        <h1>{counterState.counter}</h1>
        <button onClick={() => incrementCounter(counterDispatch)}>(+)</button>
        <button onClick={() => decrementCounter(counterDispatch)}>(-)</button>
      </div>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
