import AppLayout from '@/layouts/AppLayout';
import SubLayout from '@/layouts/SubLayout';
import MainLayout from '@/layouts/MainLayout';

import Publishing from '@/pages/publishing/Publishing.tsx';
import UiTabs from '@/pages/publishing/guide/uiTabs.tsx';
import UiChart from '@/pages/publishing/guide/uiChart.tsx';
import SampleMain from '@/pages/publishing/guide/sampleMain.tsx';
import SampleGrowthDiagnosis from '@/pages/publishing/guide/sampleGrowthDiagnosis.tsx';

export const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: '/publishing', element: <Publishing /> },
          { path: '/publishing/guide/uiTabs', element: <UiTabs /> },
          { path: '/publishing/guide/uiChart', element: <UiChart /> },
          { path: '/publishing/guide/sampleMain', element: <SampleMain /> },
        ],
      },
      {
        element: <SubLayout />,
        children: [
          { path: '/publishing/guide/sampleGrowthDiagnosis', element: <SampleGrowthDiagnosis /> },
        ],
      },
    ],
  },
];
