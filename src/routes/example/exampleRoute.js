import Less from '@/components/layouts/Less';
import Example from '@/pages/example/Example';

export default [
  {
    path: '/example',
    element: <Less />,
    children: [
      {
        index: true,
        element: <Example />
      }
    ]
  }
];
