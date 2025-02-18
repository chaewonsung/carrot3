import React from 'react';
import SelectedFilterLayout from '../common/market/SelectedFilterLayout';
import BtnSetFilter from '../common/market/BtnSetFilter';
import ModalSetCarsFilter from './ModalSetCarsFilter';
import BtnSelectedFilterWrapper from '../common/market/BtnSelectedFilterWrapper';

const CarsSelectedFilter = () => {
  return (
    <SelectedFilterLayout>
      <BtnSetFilter Modal={ModalSetCarsFilter} />
      <BtnSelectedFilterWrapper list={['경차/소형차', '자동 (A/T)']} />
    </SelectedFilterLayout>
  );
};

export default CarsSelectedFilter;
