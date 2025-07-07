import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const uiTabs = () => {
 
  return (
    <>
      <section className="absolute top-[120px] left-0 right-0 bottom-0 px-[50px] py-[20px] overflow-auto">
        <h2 className="mb-[30px] font-semibold text-[22px]">uiTabs</h2>

        <h3 className="mb-[10px] font-semibold text-[20px]">type1</h3>

        <Tabs defaultValue="graph">
          <TabsList className="type1">
            <TabsTrigger value="graph">그래프</TabsTrigger>
            <TabsTrigger value="data">데이터</TabsTrigger>
          </TabsList>
          <TabsContent value="graph">
            <p className="my-[12px] text-[14px]">그래프</p>
          </TabsContent>
          <TabsContent value="data">
            <p className="my-[12px] text-[14px]">데이터</p>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}

export default uiTabs;


