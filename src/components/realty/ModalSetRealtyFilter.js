import React from 'react';
import ModalTemplate from '../common/modal/ModalTemplate';
import ModalSetFilterTemplate from '../common/market/ModalSetFilterTemplate';
import { RealtyFilterContent } from './RealtyFilter';

const ModalSetRealtyFilter = ({ showModal, setShowModal }) => {
  return (
    <ModalTemplate
      header="부동산 검색 필터"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <ModalSetFilterTemplate>
        <RealtyFilterContent />
      </ModalSetFilterTemplate>
    </ModalTemplate>
  );
};

export default ModalSetRealtyFilter;
