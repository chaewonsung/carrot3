import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { rem } from '../../../lib/styles/variables';

const SelectBox = styled.ul`
  padding: 0.5em 0.3em;
  box-shadow: 0 0 5px 3px ${palette.gray[6] + '10'};
  border-radius: 10px;
  background-color: #fff;
  white-space: nowrap;
  > li > * {
    font-size: ${rem(14)};
    display: inline-block;
    padding: 0.7em;
    width: 100%;
    border-radius: 5px;
    &:hover {
      background: ${palette.gray[1]};
    }
  }
`;

export default SelectBox;
