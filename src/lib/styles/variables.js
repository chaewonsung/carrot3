import palette from './palette';

/* Responsive */
export const mq = {
  laptop: 1024,
  tablet: 768,
  mobile: 400,
};

export const media = (breakpoint) =>
  `@media screen and (max-width: ${mq[breakpoint]}px)`;

export const rem = (px) => px / 16 + 'rem';

export const verticalLine = (option) => `
    position: relative;
    padding-right: ${option?.space || '0.5em'};
    margin-right: ${option?.space || '0.5em'};
    &::after {
    content: '';
    position: absolute;
    top: 50%;
     ${option?.before ? 'left: 0;' : 'right: 0;'}
    transform: translate(50%, -50%);
    width: ${option?.width || '1px'};
    height: ${option?.height || '100%'};
    background-color: ${palette.gray[4]};
  }`;
