import BtnSetFilter from '../common/market/BtnSetFilter';
import BtnSelectedFilterWrapper from '../common/market/BtnSelectedFilterWrapper';
import SelectedFilterLayout from '../common/market/SelectedFilterLayout';
import ModalSetRealtyFilter from './ModalSetRealtyFilter';

const RealtySelectedFilter = () => {
  return (
    <SelectedFilterLayout>
      <BtnSetFilter Modal={ModalSetRealtyFilter} />
      <BtnSelectedFilterWrapper list={['원룸', '월세']} />
    </SelectedFilterLayout>
  );
};

export default RealtySelectedFilter;
