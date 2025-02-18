import React from 'react';
import ModalTemplate from '../common/modal/ModalTemplate';
import ModalSetFilterTemplate from '../common/market/ModalSetFilterTemplate';
import { CarsFilterContent } from './CarsFilter';

const ModalSetCarsFilter = ({ showModal, setShowModal }) => {
  return (
    <ModalTemplate
      header="중고차 검색 필터"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <ModalSetFilterTemplate>
        <CarsFilterContent />
      </ModalSetFilterTemplate>
    </ModalTemplate>
  );
};

export default ModalSetCarsFilter;
