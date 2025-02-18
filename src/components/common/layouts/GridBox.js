import React from 'react';
import styled from 'styled-components';
import { media } from '../../../lib/styles/variables';

const GridBoxBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => !['min', 'gap'].includes(prop),
})`
  display: grid;
  grid-template-columns: ${({ min }) =>
    `repeat(auto-fit, minmax(${min}, 1fr))`};
  gap: ${({ gap }) => gap};
  > * {
    min-width: 0;
  }
`;

const GridBox = ({ children, ...props }) => {
  return <GridBoxBlock {...props}>{children}</GridBoxBlock>;
};

export const ResponsiveGridBox = styled(GridBox)`
  ${media('small')} {
    grid-template-columns: 1fr 1fr !important;
  }
`;

export const PreviewGridBox = ({ children }) => (
  <ResponsiveGridBox min="185px" gap="50px 15px">
    {children}
  </ResponsiveGridBox>
);

export default GridBox;
