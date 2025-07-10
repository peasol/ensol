import UiBox from '@/components/ui/uiBox';

const sampleGrowthDiagnosis = () => {
  return (
    <>
      <div className="sub-cont">
        <h2 className="cont-title">생육진단</h2>
        <div className="layout-group">
          <div className="layout-sub w-[44%]">
            <UiBox>
              <div className="box-top">
                <h3>필지선택</h3>
              </div>
            </UiBox>
          </div>

          <div className="layout-sub w-[32%]">
            <UiBox>
              <div className="box-top">
                <h3>작물 생육상태</h3>
                <p>1개 필지의 종합적인 생육 상태를 분석합니다.</p>
              </div>
            </UiBox>
          </div>

          <div className="layout-sub w-[24%]">
            <UiBox>
              <div className="box-top">
                <h3>진단 분석</h3>
                <p>1개 필지의 진단 결과입니다.</p>
              </div>
              <div className="box-cont">
                <div className="analysis-section">
                  <h4 className="title">NDVI 분석</h4>
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="group-w1">
                        <div className="title">현재 상태</div>
                        <div className="item-stats">
                          <p>현재 NDVI: <span className="font-semibold text-[var(--T07)]">0.75</span></p>
                          <p>평균 대비: <span className="font-semibold text-[var(--T08)]">+0.05</span></p>
                          <p>상태: <span className="font-semibold text-[var(--T08)]">우수</span></p>
                        </div>
                      </div>
                      <div className="group-w2">
                        <div className="title">권장사항</div>
                        <div className="item-stats">
                          <p>현재 생육 상태가 양호하므로 유지 관리에 집중</p>
                          <p>정기적인 관수 및 영양 관리 계속</p>
                          <p>병해충 모니터링 강화</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="analysis-section">
                  <h4 className="title">LAI 분석</h4>
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="group-w1">
                        <div className="title">현재 상태</div>
                        <div className="item-stats">
                          <p>현재 LAI: <span className="font-semibold text-[var(--T07)]">3.2</span></p>
                          <p>평균 대비: <span className="font-semibold text-[var(--T08)]">+0.05</span></p>
                          <p>상태: <span className="font-semibold text-[var(--T08)]">우수</span></p>
                        </div>
                      </div>
                      <div className="group-w2">
                        <div className="title">권장사항</div>
                        <div className="item-stats">
                          <p>현재 잎 면적이 우수하므로 광합성 효율 극대화</p>
                          <p>적절한 수분 공급으로 잎의 활력 유지</p>
                          <p>병해충으로부터 잎 보호 관리 강화</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="analysis-section">
                  <h4 className="title">생구중 예측</h4>
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="group-w1">
                        <div className="title">현재 상태</div>
                        <div className="item-stats">
                          <p>현재 생구중: <span className="font-semibold text-[var(--T07)]">45.2g</span></p>
                          <p>평균 대비: <span className="font-semibold text-[var(--T08)]">+5.2g</span></p>
                          <p>상태: <span className="font-semibold text-[var(--T08)]">양호</span></p>
                        </div>
                      </div>
                      <div className="group-w2">
                        <div className="title">권장사항</div>
                        <div className="item-stats">
                          <p>현재 생구중이 평균보다 높아 양호한 상태</p>
                          <p>정상적인 관리 계속</p>
                          <p>생구중 변화 모니터링</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="analysis-section">
                  <h4 className="title">생체중 예측</h4>
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="group-w1">
                        <div className="title">현재 상태</div>
                        <div className="item-stats">
                          <p>현재 생체중: <span className="font-semibold text-[var(--T07)]">85.2g</span></p>
                          <p>평균 생체중: <span className="font-semibold text-[var(--T08)]">80.0g</span></p>
                          <p>상태: <span className="font-semibold text-[var(--T08)]">양호</span></p>
                        </div>
                      </div>
                      <div className="group-w2">
                        <div className="title">권장사항</div>
                        <div className="item-stats">
                          <p>현재 생체중이 평균보다 높아 양호한 상태</p>
                          <p>정상적인 관리 계속</p>
                          <p>생체중 변화 모니터링</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="analysis-section">
                  <h4 className="title">수확량 예측</h4>
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="group-w1">
                        <div className="title">현재 상태</div>
                        <div className="item-stats">
                          <p>예상 수확량: <span className="font-semibold text-[var(--T07)]">2,850kg/10a</span></p>
                          <p>평균 수확량: <span className="font-semibold text-[var(--T08)]">2,700kg/10a</span></p>
                          <p>상태: <span className="font-semibold text-[var(--T08)]">양호</span></p>
                        </div>
                      </div>
                      <div className="group-w2">
                        <div className="title">권장사항</div>
                        <div className="item-stats">
                          <p>예상 수확량이 평균보다 높아 양호한 상태</p>
                          <p>정상적인 관리 계속</p>
                          <p>수확량 변화 모니터링</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </UiBox>

            <UiBox>
              <div className="box-top">
                <h3>처방 및 권장사항</h3>
                <p>1개 필지의 맞춤형 처방 및 권장사항입니다.</p>
              </div>
              <div className="box-cont">
                <div className="analysis-section">
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="icon-type">
                        <i className="ic-farm01"/>
                        <div>
                          <div className="title">관수 관리</div>
                          <p>3일 내로 계획 관수량(100L)보다 추가 관수(50L) 권장</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm02"/>
                        <div>
                          <div className="title">농작업 관리</div>
                          <p>비닐 멀칭 즉시 제거 권장</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm03"/>
                        <div>
                          <div className="title">시비 관리</div>
                          <p>질소비료 20kg/10a, 인산비료 15kg/10a, 칼륨비료 10kg/10a를 시비하세요.</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm04"/>
                        <div>
                          <div className="title">병해충 방제</div>
                          <p>잎마름병 발생 위험이 있으므로 예방적 방제가 필요합니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="analysis-section">
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="icon-type">
                        <i className="ic-farm01"/>
                        <div>
                          <div className="title">관수 관리</div>
                          <p>3일 내로 계획 관수량(100L)보다 추가 관수(50L) 권장</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm02"/>
                        <div>
                          <div className="title">농작업 관리</div>
                          <p>비닐 멀칭 즉시 제거 권장</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm03"/>
                        <div>
                          <div className="title">시비 관리</div>
                          <p>질소비료 20kg/10a, 인산비료 15kg/10a, 칼륨비료 10kg/10a를 시비하세요.</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm04"/>
                        <div>
                          <div className="title">병해충 방제</div>
                          <p>잎마름병 발생 위험이 있으므로 예방적 방제가 필요합니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="analysis-section">
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="icon-type">
                        <i className="ic-farm01"/>
                        <div>
                          <div className="title">관수 관리</div>
                          <p>3일 내로 계획 관수량(100L)보다 추가 관수(50L) 권장</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm02"/>
                        <div>
                          <div className="title">농작업 관리</div>
                          <p>비닐 멀칭 즉시 제거 권장</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm03"/>
                        <div>
                          <div className="title">시비 관리</div>
                          <p>질소비료 20kg/10a, 인산비료 15kg/10a, 칼륨비료 10kg/10a를 시비하세요.</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm04"/>
                        <div>
                          <div className="title">병해충 방제</div>
                          <p>잎마름병 발생 위험이 있으므로 예방적 방제가 필요합니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="analysis-section">
                  <div className="card-item">
                    <div className="card-top">
                      <div className="id">토S-0374-00</div>
                      <div className="name">한승우</div>
                    </div>
                    <div className="card-cont">
                      <div className="icon-type">
                        <i className="ic-farm01"/>
                        <div>
                          <div className="title">관수 관리</div>
                          <p>3일 내로 계획 관수량(100L)보다 추가 관수(50L) 권장</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm02"/>
                        <div>
                          <div className="title">농작업 관리</div>
                          <p>비닐 멀칭 즉시 제거 권장</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm03"/>
                        <div>
                          <div className="title">시비 관리</div>
                          <p>질소비료 20kg/10a, 인산비료 15kg/10a, 칼륨비료 10kg/10a를 시비하세요.</p>
                        </div>
                      </div>
                      <div className="icon-type">
                        <i className="ic-farm04"/>
                        <div>
                          <div className="title">병해충 방제</div>
                          <p>잎마름병 발생 위험이 있으므로 예방적 방제가 필요합니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </UiBox>
          </div>
        </div>
      </div>
    </>
  )
}

export default sampleGrowthDiagnosis;