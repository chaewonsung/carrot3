import React from 'react';
import styled from 'styled-components';
import {
  CarsIconCalendar,
  CarsIconDrivingDistance,
  CarsIconPrice,
} from './Icons';
import { media, rem } from '../../lib/styles/variables';
import { IconArrowUpRight } from '../common/Icons';
import GoodsArticleLayout, {
  GoodsReactionStats,
} from '../common/market/GoodsArticleLayout';
import palette from '../../lib/styles/palette';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import CarsDescDl, { CarsDescLeaseInfoDl } from './CarsDescDl';
import CarsDescSectionTemplate from './CarsDescSectionTemplate';
import CarsDescCarOptionList from './CarsDescCarOptionList';
import CarsDescExtraOptionList from './CarsDescExtraOptionList';

const CarsDescBlock = styled.div`
  .tags {
    margin-bottom: ${rem(5)};
    display: flex;
    gap: ${rem(5)};
    span {
      font-size: ${rem(12)};
      background-color: ${palette.gray[3]};
      color: ${palette.gray[8]};
      border-radius: 3px;
      padding: 0.3em 0.5em;
      &.blue {
        background-color: #ebf7fa;
        color: #006497;
      }
    }
  }
  h1 {
    font-size: ${rem(28)};
    font-weight: 700;
    margin-bottom: 0.4em;
    line-height: 1.2;
  }
  .written-time {
    color: ${palette.gray[7]};
    margin-bottom: ${rem(20)};
  }
  .graphics {
    display: flex;
    border: 1px solid ${palette.gray[3]};
    border-radius: 10px;
    font-size: ${rem(14)};
    padding-block: 1.5em;
    font-weight: 600;
    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8em;
      &:not(:first-child) {
        border-left: 1px solid ${palette.gray[3]};
      }
    }
  }
  p {
    white-space: pre-line;
    line-height: 1.6;
  }

  ${media('small')} {
    h1 {
      font-size: ${rem(20)};
    }
    .written-time {
      font-size: ${rem(14)};
    }
    .graphics {
      font-size: ${rem(12)};
    }
  }
`;

const CarsDesc = () => {
  return (
    <CarsDescBlock>
      <div className="tags">
        <span>1인 소유</span>
        <span>금연 차량</span>
        <span className="blue">리스</span>
      </div>
      <h1>X4 M F98 3.0T xDrive 전기형 (480마력)</h1>
      <div className="written-time">20분 전 작성</div>
      <div className="graphics">
        <div>
          <CarsIconPrice />
          리스 85만원/월
        </div>
        <div>
          <CarsIconCalendar />
          20년식
        </div>
        <div>
          <CarsIconDrivingDistance />
          6만km
        </div>
      </div>
      <CarsDescSectionTemplate heading="리스 정보">
        <CarsDescDl
          obj={{
            '남은 개월 수': '35개월 / 59개월',
            '승계 후 총 월 납입금': '29,750,000원',
            인수금: '12,000,000원',
            '만기 후 구매/반납': {
              '만기 후 구매': '23,270,000원',
              '만기 후 반납': '0원',
            },
            '총 인수 비용': '65,020,000원',
          }}
        />
        <BtnDownloadApp type="carsCustom">리스 정보 더보기</BtnDownloadApp>
      </CarsDescSectionTemplate>
      <CarsDescSectionTemplate heading="상세 정보">
        <CarsDescDl
          obj={{
            차종: 'SUV/RV',
            '연식 / 등록일': '20년식 / 20년 1월 등록',
            주행거리: '6만km',
            배기량: '2993cc',
            연료: '알 수 없음',
            변속기: '자동 (A/T)',
          }}
        />
      </CarsDescSectionTemplate>
      <CarsDescSectionTemplate heading="차량 옵션">
        <CarsDescCarOptionList />
        <BtnDownloadApp type="carsCustom">20개 더 보기</BtnDownloadApp>
      </CarsDescSectionTemplate>
      <CarsDescSectionTemplate heading="추가 옵션">
        <CarsDescExtraOptionList />
      </CarsDescSectionTemplate>
      <CarsDescSectionTemplate heading="상세 내용">
        <p>
          {`첫 차주는 BMW서비스센터 직원으로 차량을 병적관리 하였으며, 제가 해당 차량을 23년 1월에 BMW 인증중고로 구매하게 됨(인증중고 서비스를 모두 받은 차량)

이후 차량 관리 내역은 아래와 같음.
23년 6월: 기본 BMW 블랙박스가 아쉬워 2채널 아이나비커넥티드 블랙박스+보조배터리 설치함 (120만원)
24년 2월: 앞브레이크 패드+센서 세트 교체 (50만원)
24년 2월: 자동차 배터리 새것 교체 (45만원)
24년 4월: BMW 정식센터에서 엔진오일 및 마이크로집진필터 교체(무료)
24년 8월: 뒷 타이어 양쪽 새 것으로 교체 및 얼라이먼트 체크 (67만원)
24년 11월: BMW 정식센터에서 브레이크 오일 교체(무료)


상시 고급유 주유하였고 저 또한 비흡연자이고 병적관리 하였고 완전 무사고 차량입니다. 데일리 차가 아니고 주말에 가끔 나들이 갈때 타고 다녔습니다.

비엠의 트윈터보 실키식스 엔진 필링 정말 양탄자 탄것처럼 부드럽고, 씨 없는 맛있는 포도 같은 사기캐 같은 차 라서 차명을 샤인머스켓이라고 저장해 놓고 다녔습니다.

스피커도 하만카돈풀옵이라 차 타신 분들 다들 스피커 좋다고 칭찬 하셨습니다.

실제로 방문해서 보셔도 되니 연락 많이 주세요.`}
        </p>
      </CarsDescSectionTemplate>
      <GoodsReactionStats chat={22} like={184} look={12838} />
    </CarsDescBlock>
  );
};

export default CarsDesc;
