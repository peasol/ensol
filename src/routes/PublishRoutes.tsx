import Publishing from "@/pages/publishing/Publishing.tsx";
import SampleChart from "@/pages/publishing/guide/sampleChart.tsx";
import SampleMain from "@/pages/publishing/guide/sampleMain.tsx";
import SampleTab from "@/pages/publishing/guide/sampleTab";

const PublishRoutes: any = [
  {
    path: '/publishing',
    element: <Publishing/>
  },

  // components sample
  {
    path: '/publishing/guide/sampleChart',
    element: <SampleChart/>
  },

  // page sample
  {
    path: '/publishing/guide/sampleMain',
    element: <SampleMain/>
  },

  // tab sample
  {
    path: '/publishing/guide/sampleTab',
    element: <SampleTab/>
  },
]

export default PublishRoutes