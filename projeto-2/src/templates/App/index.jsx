// import { Posts } from '../../components/Posts';
// import { CounterProviders } from '../../contexts/CounterProviders';
// import { PostsProvider } from '../../contexts/PostsProvider';
import { useEffect, useRef, useState } from 'react';
import './styles.css';

const useFetch = (url = null, options = null) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };

    fetchData();
  }, []);

  return [result, loading];
};

export default function App() {
  const urlApi = 'https://jsonplaceholder.typicode.com/posts';
  const [result, loading] = useFetch(urlApi, {
    headers: {
      abc: '1',
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {result &&
          result.map((p) => (
            <section key={p.id}>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </section>
          ))}
      </div>
    );
  }

  return (
    <div>
      {/* <CounterProviders>
        <PostsProvider>
          <div>
            <Posts />
          </div>
        </PostsProvider>
      </CounterProviders> */}

      <h1>Oi</h1>
    </div>
  );
}
