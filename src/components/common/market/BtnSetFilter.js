import React, { useState } from 'react';
import { ButtonGray } from '../buttons/Button.style';
import { IconFilter } from '../Icons';
import styled from 'styled-components';
import { rem, verticalLine } from '../../../lib/styles/variables';
import { Medium } from '../layouts/Responsive';

const BtnSetFilterBlock = styled.div`
  display: inline-block;
  flex-shrink: 0;
  margin-bottom: ${rem(30)};
  .icon-filter {
    margin-right: 0.4em;
  }
  .line {
    ${verticalLine({ space: '1em', height: '120%' })}
  }
`;

const BtnSetFilter = ({ Modal }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Medium>
        <BtnSetFilterBlock>
          <ButtonGray round onClick={() => setShowModal(true)}>
            <IconFilter $scale="1.3" />
            필터 (5)
          </ButtonGray>
          <i className="line" />
        </BtnSetFilterBlock>
      </Medium>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default BtnSetFilter;
