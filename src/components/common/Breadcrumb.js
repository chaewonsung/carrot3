import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { media, rem } from '../../lib/styles/variables';

const BreadcrumbBlock = styled.nav`
  color: ${palette.gray[8]};
  font-size: ${rem(14)};
  ol {
    display: flex;
  }
  li:not(:first-child) {
    &::before {
      content: '\uF285';
      font-family: bootstrap-icons !important;
      margin: 0 0.2em;
      font-size: 0.8em;
    }
  }
  li:last-child {
    font-weight: 500;
  }
`;

const Breadcrumb = ({ navList, ...props }) => {
  return (
    <BreadcrumbBlock {...props}>
      <ol>
        {navList.map((item, i) => (
          <li key={item.name}>
            {i === navList.length - 1 ? (
              item.name
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </BreadcrumbBlock>
  );
};

export const BreadcrumbForGoodsDetail = styled(Breadcrumb)`
  padding-block: ${rem(30)} ${rem(20)};
  ${media('medium')} {
    display: none;
  }
`;

export default Breadcrumb;
