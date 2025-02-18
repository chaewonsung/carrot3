import styled from 'styled-components';
import Inner from '../common/layouts/Inner';
import { media, rem } from '../../lib/styles/variables';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Fnb from './Fnb';
import CorpInfo from './CorpInfo';

const FooterBlock = styled.footer`
  padding: 50px 0;
  .top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid ${palette.gray[2]};
  }
  .bottom {
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-size: ${rem(14)};
    * {
      color: ${palette.gray[7]};
    }
  }

  ${media('medium')} {
    .top {
      flex-direction: column;
      gap: ${rem(40)};
    }
  }
`;

const SnsList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${rem(20)};
  margin-top: ${rem(20)};
  a {
    display: block;
  }
  .bi {
    font-size: 1.4em;
  }
  .bi-youtube {
    display: inline-block;
    width: 1.05em;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: ${palette.gray[9]};
    color: white;
    &::before {
      scale: 0.66;
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Inner>
        <div className="top">
          <div>
            <img src="/images/logo.svg" alt="" width="52px" />
            <SnsList>
              <li>
                <Link to="/">
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bi bi-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="bi bi-youtube"></i>
                </Link>
              </li>
            </SnsList>
          </div>
          <Fnb />
        </div>
        <div className="bottom">
          <CorpInfo />
        </div>
      </Inner>
    </FooterBlock>
  );
};

export default Footer;
