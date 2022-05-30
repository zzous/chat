import Default from '@/components/layouts/Default';
import Main from '@/pages/main/Main';

export default [
  {
    path: '/',
    element: <Default />,
    children: [
      {
        index: true,
        element: <Main />
      }
    ]
  }
];
