import styled from 'styled-components';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import Inner from '../common/layouts/Inner';
import Gnb, { FullHeaderGnb } from './Gnb';
import Transition from '../common/Transition';
import { rem } from '../../lib/styles/variables';

const FullHeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 998;
  .content {
    height: 100vh;
    overflow: auto;
    padding: var(--fixed-header-height) 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .gnb {
    margin-bottom: 70px;
  }
  .download-app {
    p {
      margin-bottom: ${rem(15)};
    }
  }

  /* show animation */
  transform: translateY(-100%);
  opacity: 0;
  transition: 0.4s ease-in-out;

  [data-anim] {
    opacity: 0;
    transform: translateY(-100%);
    transition-duration: 0.4s;
    &:nth-of-type(1) {
      transition-delay: 0.4s;
    }
    &:nth-of-type(2) {
      transition-delay: calc(0.03s + 0.4s);
    }
    &:nth-of-type(3) {
      transition-delay: calc(0.06s + 0.4s);
    }
    &:nth-of-type(4) {
      transition-delay: calc(0.09s + 0.4s);
    }
    &:nth-of-type(5) {
      transition-delay: calc(0.12s + 0.4s);
    }
    &:nth-of-type(6) {
      transition-delay: calc(0.15s + 0.4s);
    }
    &:nth-of-type(7) {
      transition-delay: calc(0.18s + 0.4s);
    }
    &.download-app {
      transition-delay: calc(0.21s + 0.4s);
    }
  }
  &.show {
    transform: translateY(0);
    opacity: 1;

    [data-anim] {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FullHeader = ({ showFullHeader, setShowFullHeader }) => {
  return (
    <Transition show={showFullHeader} className="show" timeout={400}>
      <FullHeaderBlock>
        <Inner>
          <div className="content">
            <div
              className="gnb"
              onClick={(e) => {
                if (e.target.nodeName === 'A') setShowFullHeader(false);
              }}
            >
              <FullHeaderGnb />
            </div>
            <div className="download-app" data-anim>
              <p>당근 앱 설치 후 사용해보세요!</p>
              <BtnDownloadApp type="lightButton" fz="1rem" />
            </div>
          </div>
        </Inner>
      </FullHeaderBlock>
    </Transition>
  );
};

export default FullHeader;
