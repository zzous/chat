import NoMatch from '@/components/hoc/Nomatch';

import mainRoute from './main/mainRoute';
import logRoute from './log/logRoute';
import historyRoute from './history/historyRoute';
import exampleRoute from './example/exampleRoute';

// * https://reactrouter.com/docs/en/v6
const routes = [
  ...mainRoute,
  ...logRoute,
  ...historyRoute,
  ...exampleRoute,
  {
    path: '*',
    element: <NoMatch />
  }
];

export default routes;
