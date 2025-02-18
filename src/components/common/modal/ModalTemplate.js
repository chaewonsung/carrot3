import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { media, mq, rem } from '../../../lib/styles/variables';
import { IconClose } from '../Icons';
import ReactDOM from 'react-dom';
import Transition from '../Transition';

const Modal = styled.div`
  --modal-template-padding: 1rem;
  position: relative;
  width: 560px;
  height: 65vh;
  background-color: ${palette.gray[0]};
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  ${media('small')} {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const ModalHeader = styled.h2`
  font-weight: 600;
  border-bottom: 1px solid ${palette.gray[3]};
  padding: var(--modal-template-padding);
  font-size: ${rem(20)};
`;
const ModalContent = styled.div`
  flex: 1;
  height: 0;
`;
const ModalBtnClose = styled.button`
  position: absolute;
  top: var(--modal-template-padding);
  right: var(--modal-template-padding);
  scale: 1.3;
`;

const ModalTemplateBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${palette.gray[9] + '80'};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  /* mount animation */
  opacity: 0;
  transition: 0.2s;
  ${Modal} {
    scale: 0.9;
    transition: 0.2s;
  }
  &.show {
    opacity: 1;
    ${Modal} {
      scale: 1;
    }
  }

  ${media('small')} {
    align-items: flex-end;

    /* mount animation */
    ${Modal} {
      scale: 1;
      transform: translateY(100%);
    }
    &.show {
      ${Modal} {
        transform: translateY(0);
      }
    }
  }
`;

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('modal-root'));
};

const ModalTemplate = ({ header, showModal, setShowModal, children }) => {
  return (
    <ModalPortal>
      <Transition show={showModal} timeout={200}>
        <ModalTemplateBlock
          role="dialog"
          aria-modal
          aria-labelledby='modal-header'
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <Modal>
            <ModalHeader id='modal-header'>{header}</ModalHeader>
            <ModalContent>{children}</ModalContent>
            <ModalBtnClose onClick={() => setShowModal(false)}>
              <IconClose />
            </ModalBtnClose>
          </Modal>
        </ModalTemplateBlock>
      </Transition>
    </ModalPortal>
  );
};

export default ModalTemplate;
