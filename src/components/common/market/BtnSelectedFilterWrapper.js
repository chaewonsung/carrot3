import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { rem } from '../../../lib/styles/variables';
import { IconClose } from '../Icons';

const ButtonSelectedFilter = styled.button`
  background-color: ${palette.gray[9]};
  color: ${palette.gray[0]};
  border-radius: 99px;
  margin-right: 0.5em;
  .icon-close {
    margin-left: 0.3em;
  }
`;

const BtnSelectedFilter = ({ children }) => (
  <ButtonSelectedFilter>
    {children}
    <IconClose />
  </ButtonSelectedFilter>
);

const BtnSelectedFilterWrapperBlock = styled.div`
  white-space: nowrap;
  overflow: auto;
  margin-bottom: ${rem(30)};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BtnSelectedFilterWrapper = ({ list }) => (
  <BtnSelectedFilterWrapperBlock>
    {list.map((item) => (
      <BtnSelectedFilter key={item}>{item}</BtnSelectedFilter>
    ))}
  </BtnSelectedFilterWrapperBlock>
);

export default BtnSelectedFilterWrapper;
