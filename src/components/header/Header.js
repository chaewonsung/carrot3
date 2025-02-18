import styled from 'styled-components';
import GlobalSearch from './GlobalSearch';
import FixedHeaderWrapper from './FixedHeaderWrapper';
import { FormSearchWithOption } from '../common/forms/FormSearch';

const HeaderBlock = styled.header`
  --fixed-header-height: 72px;
`;

const Header = ({ noGlobalSearch }) => {
  return (
    <HeaderBlock>
      <FixedHeaderWrapper />
      {noGlobalSearch || (
        <GlobalSearch>
          <FormSearchWithOption
            optionList={['중고거래', '동네업체', '알바', '중고차', '부동산']}
          />
        </GlobalSearch>
      )}
    </HeaderBlock>
  );
};

export default Header;
