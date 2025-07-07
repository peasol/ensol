function Publishing() {
  return (
    <>
      <section className="absolute top-[120px] left-0 right-0 bottom-0 px-[50px] py-[20px] overflow-auto">
        <h2 className="mb-[20px] font-semibold text-[22px]">컴포넌트/UI</h2>
        <ul className="flex flex-col gap-[5px]">
          <li>
            <a href="/publishing/guide/uiTabs" target="_blank" className="inline-flex items-center gap-[5px] hover:text-[#313daa]">
              <span>uiTabs</span><span>탭</span>
            </a>
          </li>
          <li>
            <a href="/publishing/guide/uiChart" target="_blank" className="inline-flex items-center gap-[5px] hover:text-[#313daa]">
              <span>uiChart</span><span>차트</span>
            </a>
          </li>
        </ul>

        <h2 className="mt-[50px] mb-[20px] font-semibold text-[22px]">페이지</h2>
        <ul className="flex flex-col gap-[5px]">
          <li>
            <a href="/publishing/guide/sampleMain" target="_blank" className="inline-flex items-center gap-[5px] hover:text-[#313daa]">
              <span>sampleMain</span><span>메인</span>
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-[5px]">
          <li>
            <a href="/publishing/guide/sampleGrowthDiagnosis" target="_blank" className="inline-flex items-center gap-[5px] hover:text-[#313daa]">
              <span>sampleGrowthDiagnosis</span><span>생육진단 &gt; 생육상황판</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  ) 
}

export default Publishing;
