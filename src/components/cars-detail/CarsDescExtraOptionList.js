import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { rem } from '../../lib/styles/variables';
import ScrollBox from '../common/styles/ScrollBox';

const CarsDescExtraOptionListBlock = styled(ScrollBox)`
  display: flex;
  gap: 0.7em;
  font-size: ${rem(14)};
  li > div {
    background-color: ${palette.gray[2]};
    border-radius: 8px;
    padding: 0.6em 0.8em;
    display: flex;
    align-items: center;
    gap: 0.3em;
  }
`;

const CarsDescExtraOptionList = () => {
  return (
    <CarsDescExtraOptionListBlock as='ul'>
      <li>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
            class="k8xo8u1"
          >
            <path
              fill="#329BE1"
              d="M8 2.26a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68Zm0 7.18c-3.1 0-5.14 1.69-5.14 3.94 0 .2.17.36.36.36h9.57c.2 0 .36-.17.36-.36 0-2.25-2.04-3.94-5.14-3.94h-.02H8Z"
            ></path>
          </svg>
          1인 소유
        </div>
      </li>
      <li>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
            class="k8xo8u1"
          >
            <path
              fill="#00B493"
              d="m1.349 4.17-.67 6.64a2.844 2.844 0 0 0 2.83 3.13h4.02c1.69 0 3-1.45 2.83-3.13l-.67-6.63a2.135 2.135 0 0 0-2.12-1.92h-4.08c-1.1 0-2.01.83-2.12 1.92l-.02-.01Z"
            ></path>
            <path
              fill="#029D82"
              d="M7.85 9.86H3.19c-.22 0-.4.18-.4.4v1.24c0 .22.18.4.4.4h4.66c.22 0 .4-.18.4-.4v-1.24c0-.22-.18-.4-.4-.4Zm-4.13-4.1c.56 0 1.02-.46 1.02-1.02s-.46-1.02-1.02-1.02-1.02.46-1.02 1.02.46 1.02 1.02 1.02Z"
            ></path>
            <path
              fill="#F7BB4E"
              d="M12.797 13.46V8.99h-1.43v4.47l.72.6.71-.6Z"
            ></path>
            <path
              fill="#F7BB4E"
              d="M13.299 10.4V4.26h-2.42v6.14l1.21 1.44 1.21-1.44Z"
            ></path>
            <path
              fill="#F7BB4E"
              d="m12.047 11.66.04.04.03-.03-.03-.05-.04.04Zm1.923-9.4h-3.76c-.75 0-1.35.61-1.35 1.35v3.02c0 .75.61 1.35 1.35 1.35h3.76c.75 0 1.35-.61 1.35-1.35V3.61c0-.75-.61-1.35-1.35-1.35Z"
            ></path>
            <path
              fill="#fff"
              d="M13.027 3.31h-1.88a.44.44 0 0 0 0 .88h1.88a.44.44 0 0 0 0-.88Z"
            ></path>
          </svg>
          키 2개
        </div>
      </li>
      <li>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
            class="k8xo8u1"
          >
            <path
              fill="#898E97"
              d="m4.151 4.34 1.03-1.71c.1-.16.33-.29.5-.29h4.68c.18 0 .4.13.5.29l1.03 1.71h1.47c.73 0 1.33.59 1.33 1.33v6.66c0 .74-.59 1.33-1.33 1.33H2.701c-.73 0-1.33-.59-1.33-1.33V5.67c0-.73.59-1.33 1.33-1.33h1.45Z"
            ></path>
            <path
              fill="#BABEC5"
              d="M8.02 5.59C6.14 5.59 4.61 7.12 4.61 9c0 1.88 1.53 3.41 3.41 3.41 1.88 0 3.41-1.53 3.41-3.41 0-1.88-1.53-3.41-3.41-3.41Z"
            ></path>
            <path
              fill="#585B63"
              d="M7.272 3.28c-.33 0-.6.27-.6.6 0 .33.27.6.6.6h1.5c.33 0 .6-.27.6-.6 0-.33-.27-.6-.6-.6h-1.5Zm.748 7.92A2.2 2.2 0 0 1 5.82 9c0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2Z"
            ></path>
          </svg>
          블랙박스 포함
        </div>
      </li>
      <li>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            aria-hidden="true"
            class="k8xo8u1"
          >
            <path
              fill="#D1D3D8"
              d="M4.129 6.66h7.47c.19 0 .34.15.34.34v1.99c0 .19-.15.34-.34.34h-7.47V6.66Z"
            ></path>
            <path fill="#F85D52" d="M5.289 6.66h-1.16v2.67h1.16V6.66Z"></path>
            <path
              stroke="#F85D52"
              d="M7.999 14.19c3.42 0 6.19-2.77 6.19-6.19 0-3.42-2.77-6.19-6.19-6.19-3.42 0-6.19 2.77-6.19 6.19 0 3.42 2.77 6.19 6.19 6.19ZM12.43 3.58l-8.84 8.84"
            ></path>
          </svg>
          금연 차량
        </div>
      </li>
    </CarsDescExtraOptionListBlock>
  );
};

export default CarsDescExtraOptionList;
