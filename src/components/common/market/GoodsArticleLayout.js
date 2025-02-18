import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { media, rem } from '../../../lib/styles/variables';

const GoodsArticleLayoutBlock = styled.article`
  display: flex;
  gap: ${rem(30)};
  padding-bottom: ${rem(40)};
  border-bottom: 1px solid ${palette.gray[3]};
  > * {
    flex: 1;
    width: 0;
  }

  ${media('medium')} {
    flex-direction: column;
    > * {
      width: auto;
    }
  }
`;

const GoodsArticleLayout = ({ children, ...props }) => {
  return (
    <GoodsArticleLayoutBlock {...props}>{children}</GoodsArticleLayoutBlock>
  );
};

const GoodsReactionStatsBlock = styled.div`
  font-size: ${rem(13)};
  color: ${palette.gray[7]};
  margin-bottom: 1.5em;
`;

export const GoodsReactionStats = ({ chat, like, look }) => (
  <GoodsReactionStatsBlock>
    채팅 {chat} · 관심 {like} · 조회 {look}
  </GoodsReactionStatsBlock>
);

export default GoodsArticleLayout;
