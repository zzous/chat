import NoMatch from '@/components/hoc/Nomatch';

import mainRoute from './main/mainRoute';
import exampleRoute from './example/exampleRoute';

// * https://reactrouter.com/docs/en/v6
const routes = [
  ...mainRoute,
  ...exampleRoute,
  {
    path: '*',
    element: <NoMatch />
  }
];

export default routes;
