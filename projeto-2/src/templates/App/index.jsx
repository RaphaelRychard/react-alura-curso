import { Posts } from '../../components/Posts';
import { CounterProviders } from '../../contexts/CounterProviders';
import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';

export default function App() {
  return (
    <div>
      <CounterProviders>
        <PostsProvider>
          <div>
            <Posts />
          </div>
        </PostsProvider>
      </CounterProviders>
    </div>
  );
}
