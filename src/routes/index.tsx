// src/routes/index.tsx
import AppLayout from '@/layouts/AppLayout';
import SubLayout from '@/layouts/SubLayout';
import MainLayout from '@/layouts/MainLayout';

import Publishing from '@/pages/publishing/Publishing';
import SampleChart from '@/pages/publishing/guide/sampleChart';
import SampleMain from '@/pages/publishing/guide/sampleMain';
import SampleTab from '@/pages/publishing/guide/sampleTab';

export const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: 'publishing', element: <Publishing /> },
          { path: 'publishing/guide/sampleMain', element: <SampleMain /> },
          { path: 'publishing/guide/sampleChart', element: <SampleChart /> },
          { path: 'publishing/guide/sampleTab', element: <SampleTab /> },
        ],
      },
      {
        element: <SubLayout />,
        children: [
        ],
      },
    ],
  },
];
