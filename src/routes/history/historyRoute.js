import Default from '@/components/layouts/Default';
import History from '@/pages/history/History';

export default [
  {
    path: '/history',
    element: <Default />,
    children: [
      {
        index: true,
        element: <History />
      }
    ]
  }
];
