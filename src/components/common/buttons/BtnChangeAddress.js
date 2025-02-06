import styled from 'styled-components';
import { IconDropdown, IconLocation } from '../Icons';
import { BtnGray } from './Button.style';
import { rem } from '../../../lib/styles/variables';

const BtnChangeAddressBlock = styled(BtnGray)`
  display: flex;
  gap: ${rem(3)};
  align-items: center;
  font-size: ${rem(14)};
  padding: 1em;
`;

const BtnChangeAddress = () => {
  return (
    <>
      <BtnChangeAddressBlock round fw="600">
        <IconLocation />
        인창동
        <IconDropdown $fz="0.8em" />
      </BtnChangeAddressBlock>
    </>
  );
};

export default BtnChangeAddress;
