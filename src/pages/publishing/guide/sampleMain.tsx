const sampleMain = () => {
  return (
    <>
      <div className="main-cont">
        <div className="txt-key">
          <span className="sr-only">
            의성 노지 스마트농업 정보시스템
            센서와 데이터가 농사 상황을 알아서 분석하고, 필요한 작업을 농가에 알려주며 기록까지 해주는 똑똑한 영농관리 서비스
          </span>
        </div>
        <div className="goto-wrap">
          <a href="#a" className="goto">
            <div className="icon i01"/>
            <div className="txt">대시보드</div>
          </a>
          <a href="#a" className="goto">
            <div className="icon i02"/>
            <div className="txt">생육진단</div>
          </a>
          <a href="#a" className="goto">
            <div className="icon i03"/>
            <div className="txt">스마트관수</div>
          </a>
          <a href="#a" className="goto">
            <div className="icon i04"/>
            <div className="txt">스마트방제</div>
          </a>
          <a href="#a" className="goto">
            <div className="icon i05"/>
            <div className="txt">농기계운영</div>
          </a>
          <a href="#a" className="goto">
            <div className="icon i06"/>
            <div className="txt">영농일지</div>
          </a>
        </div>  
      </div>
      <a href="#a" className="setting" aria-label="설정"/>
    </>
  )
}

export default sampleMain


