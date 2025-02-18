import styled from 'styled-components';
import { ButtonGray } from '../common/buttons/Button.style';
import { IconDropdown, IconLocation } from '../common/Icons';
import { rem } from '../../lib/styles/variables';
import { useState } from 'react';
import ModalTemplate from '../common/modal/ModalTemplate';
import ModalChangeAddress from './ModalChangeAddress';

const BtnChangeAddressBlock = styled(ButtonGray)`
  display: flex;
  gap: ${rem(3)};
  align-items: center;
  font-size: ${rem(14)};
  padding: 1em;
`;

const BtnChangeAddress = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BtnChangeAddressBlock round fw="600" onClick={() => setShowModal(true)}>
        <IconLocation />
        인창동
        <IconDropdown $fz="0.8em" />
      </BtnChangeAddressBlock>
      <ModalTemplate
        header="지역 변경"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <ModalChangeAddress setShowModal={setShowModal} />
      </ModalTemplate>
    </>
  );
};

BtnChangeAddress.style = BtnChangeAddressBlock;

export default BtnChangeAddress;
