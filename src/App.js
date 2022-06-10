import { useRoutes } from 'react-router-dom';
import routes from '@/routes';

function App() {
  let RWS = useRoutes(routes);
  return <>{ RWS }</>;
}

export default App;
