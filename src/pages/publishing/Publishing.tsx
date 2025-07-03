function Publishing() {
  return (
    <>
      <section className="absolute top-[120px] left-0 right-0 bottom-0 px-[50px] py-[20px] overflow-auto">
        <h2 className="mb-[20px] font-semibold text-[22px]">컴포넌트/UI</h2>
        <ul className="flex flex-col gap-[5px]">
          <li>
            <a href="/publishing/guide/sampleChart" target="_blank" className="inline-flex items-center gap-[5px] hover:text-[#313daa]">
              <span>sampleChart</span><span>차트</span>
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
      </section>
    </>
  ) 
}

export default Publishing;
