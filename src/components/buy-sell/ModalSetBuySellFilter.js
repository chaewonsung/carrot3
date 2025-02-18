import React from 'react';
import { BuySellFilterContent } from './BuySellFilter';
import ModalTemplate from '../common/modal/ModalTemplate';
import ModalSetFilterTemplate from '../common/market/ModalSetFilterTemplate';

const ModalSetBuySellFilter = ({ showModal, setShowModal }) => {
  return (
    <ModalTemplate
      header="중고거래 검색 필터"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <ModalSetFilterTemplate>
        <BuySellFilterContent modal />
      </ModalSetFilterTemplate>
    </ModalTemplate>
  );
};

export default ModalSetBuySellFilter;
