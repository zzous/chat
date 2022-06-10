import Default from '@/components/layouts/Default';
import Log from '@/pages/log/Log';

export default [
  {
    path: '/log',
    element: <Default />,
    children: [
      {
        index: true,
        element: <Log />
      }
    ]
  }
];
