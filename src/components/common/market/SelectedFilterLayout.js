import React from 'react';
import styled from 'styled-components';
import { rem } from '../../../lib/styles/variables';

const SelectedFilterLayoutBlock = styled.div`
  font-size: ${rem(14)};
  display: flex;
  button {
    padding: 0.6em 0.8em;
  }
`;

const SelectedFilterLayout = ({ children }) => {
  return <SelectedFilterLayoutBlock>{children}</SelectedFilterLayoutBlock>;
};

export default SelectedFilterLayout;
