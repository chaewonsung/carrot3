import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { media, rem } from '../../lib/styles/variables';

const UserInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(15)} 0;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  img {
    border-radius: 50%;
    width: ${rem(56)};
    aspect-ratio: 1/1;
  }
  .user-name {
    font-weight: 600;
  }
  .user-address {
    font-size: ${rem(14)};
    margin-top: 0.5em;
    color: ${palette.gray[7]};
  }

  ${media('medium')} {
    img {
      width: ${rem(64)};
    }
    .user-name {
      font-size: ${rem(20)};
    }
    .user-address {
      font-size: ${rem(16)};
    }
  }
  ${media('small')} {
    img {
      width: ${rem(48)};
    }
    .user-name {
      font-size: ${rem(16)};
    }
    .user-address {
      font-size: ${rem(14)};
    }
  }
`;

const UserMannerTemp = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(7)};
  text-align: right;
  .interface {
    display: flex;
    align-items: center;
    gap: ${rem(5)};
    .temp {
      --temp-color: ${palette.carrot[5]};
      display: flex;
      flex-direction: column;
      gap: ${rem(3)};
      span {
        font-weight: 600;
        color: var(--temp-color);
        ${media('medium')} {
          font-size: ${rem(20)};
        }
        ${media('small')} {
          font-size: ${rem(16)};
        }
      }
    }
  }
  > span {
    color: gray;
    font-size: ${rem(14)};
    ${media('medium')} {
          font-size: ${rem(16)};
        }
    ${media('small')} {
          font-size: ${rem(14)};
        }
  }
`;

const ProgressBlock = styled.div`
  position: relative;
  height: ${rem(5)};
  background-color: ${palette.gray[3]};
  border-radius: 99px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ value }) => value + '%' || null};
    height: 100%;
    border-radius: 99px;
    background-color: ${({ color }) => color || 'pink'};
  }
`;

const Progress = (props) => {
  return <ProgressBlock {...props} />;
};

const UserInfo = (props) => {
  return (
    <UserInfoBlock {...props}>
      <UserProfile>
        <img
          src="/images/user_profile_placeholder.png"
          alt="판매자 프로필 사진"
        />
        <div>
          <div className="user-name">황채원</div>
          <div className="user-address">인창동</div>
        </div>
      </UserProfile>
      <UserMannerTemp>
        <div className="interface">
          <div className="temp">
            <span>47.4°C</span>
            <Progress value="47.4" color={palette.carrot[5]} />
          </div>
          <img src="/images/manner_yellow.svg" alt="" />
        </div>
        <span>매너온도</span>
      </UserMannerTemp>
    </UserInfoBlock>
  );
};

export const UserInfoForGoodsArticle = styled(UserInfo)`
  ${media('medium')} {
    border-bottom: 1px solid ${palette.gray[3]};
  }
`;

export default UserInfo;
