import React from 'react';
import styled from 'styled-components';
import { ButtonGrayHover, ButtonSymbolDark } from '../buttons/Button.style';
import palette from '../../../lib/styles/palette';
import { rem } from '../../../lib/styles/variables';

const ModalSetFilterTemplateBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    height: 0;
    overflow-y: scroll;
    padding: 0 var(--modal-template-padding);
  }

  .buttons {
    padding: var(--modal-template-padding);
    border-top: 1px solid ${palette.gray[3]};
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: ${rem(15)};
  }
`;

const BtnConfirm = styled(ButtonSymbolDark)`
  &:disabled {
    background-color: ${palette.gray[3]};
    color: ${palette.gray[6]};
  }
`;

const ModalSetFilterTemplate = ({ children }) => {
  return (
    <ModalSetFilterTemplateBlock>
      <div className="content">{children}</div>
      <div className="buttons">
        <ButtonGrayHover fw="500">전체 해제</ButtonGrayHover>
        <BtnConfirm fw="500">적용하기</BtnConfirm>
      </div>
    </ModalSetFilterTemplateBlock>
  );
};

export default ModalSetFilterTemplate;
