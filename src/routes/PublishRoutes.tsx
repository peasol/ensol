import Publishing from "@/pages/publishing/Publishing.tsx";
import SampleChart from "@/pages/publishing/guide/sampleChart.tsx";
import SampleMain from "@/pages/publishing/guide/sampleMain.tsx";

const PublishRoutes:any = [
  {
    path: '/publishing',
    element: <Publishing />
  },

  // components sample
  {
    path: '/publishing/guide/sampleChart',
    element: <SampleChart />
  },

  // page sample
  {
    path: '/publishing/guide/sampleMain',
    element: <SampleMain />
  },
]

export default PublishRoutes