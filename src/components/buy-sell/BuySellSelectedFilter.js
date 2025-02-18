import ModalSetBuySellFilter from './ModalSetBuySellFilter';
import BtnSetFilter from '../common/market/BtnSetFilter';
import BtnSelectedFilterWrapper from '../common/market/BtnSelectedFilterWrapper';
import SelectedFilterLayout from '../common/market/SelectedFilterLayout';

const BuySellSelectedFilter = () => {
  return (
    <SelectedFilterLayout>
      <BtnSetFilter Modal={ModalSetBuySellFilter} />
      <BtnSelectedFilterWrapper
        list={['판매중', '디지털기기', '최신순', '나눔']}
      />
    </SelectedFilterLayout>
  );
};

export default BuySellSelectedFilter;
