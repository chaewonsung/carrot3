import styled from 'styled-components';
import { rem } from '../../lib/styles/variables';
import { IconCrosshair } from '../common/Icons';
import palette from '../../lib/styles/palette';
import { ButtonSymbol } from '../common/buttons/Button.style';
import SearchForm from '../common/forms/FormSearch';

const ModalChangeAddressBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--modal-template-padding);
  > *:nth-child(1) {
    margin-bottom: ${rem(15)};
  }
  > *:nth-child(2) {
    margin-bottom: ${rem(40)};
  }
  > *:nth-child(3) {
    margin-bottom: ${rem(15)};
  }
`;

const BtnUseCurrentLocationBlock = styled(ButtonSymbol)`
  .icon-crosshair {
    margin-right: ${rem(5)};
  }
`;

const BtnUseCurrentLocation = () => {
  return (
    <BtnUseCurrentLocationBlock fullWidth fw="700" fz={rem(14)}>
      <IconCrosshair />
      현재 내 위치 사용하기
    </BtnUseCurrentLocationBlock>
  );
};

const ModalChangeAddress = ({ setShowModal }) => {
  return (
    <ModalChangeAddressBlock>
      <SearchForm placeholder="지역이나 동네로 검색하기" autoFocus focusStyle />
      <BtnUseCurrentLocation />
      {/* <FailureMsg /> */}
      <AddressList setShowModal={setShowModal} />
    </ModalChangeAddressBlock>
  );
};

const FailureMsgBlock = styled.div`
  padding-bottom: 1em;
  p:first-child {
    font-weight: 700;
    font-size: ${rem(20)};
    margin-bottom: 15px;
  }
  p:last-child {
    font-size: ${rem(14)};
    line-height: 1.4;
  }
`;

const FailureMsg = () => {
  return (
    <FailureMsgBlock>
      <p>""에 대한 검색 결과가 없어요.</p>
      <p>
        검색어나 페이지의 주소를 다시 확인하시거나, 범용적인 검색어를
        입력해주세요.
      </p>
    </FailureMsgBlock>
  );
};

const AddressListBlock = styled.div`
  flex: 1 1 auto;
  height: 0px;
  overflow: auto;
  span {
    color: #006199;
    font-size: ${rem(13)};
    font-weight: 500;
  }
  button {
    padding: 0.9em 0;
    border-bottom: 1px solid ${palette.gray[3]};
    width: 100%;
  }
`;

const AddressList = ({ setShowModal }) => {
  return (
    <AddressListBlock>
      <span>추천</span>
      <ul>
        {[
          '서울특별시 강남구',
          '서울특별시 송파구',
          '경기도 부천시',
          '경기도 화성시',
          '서울특별시 강서구',
          '인천광역시 서구',
          '경기도 남양주시',
        ].map((item) => (
          <li key={item} onClick={() => setShowModal(false)}>
            <button>{item.replace(' ', ', ')}</button>
          </li>
        ))}
      </ul>
    </AddressListBlock>
  );
};

export default ModalChangeAddress;
