import styled from 'styled-components';

const Icon = styled.i`
  display: inline-block;
  font-size: ${({ $fz }) => $fz || null};
  scale: ${({ $scale }) => $scale || null};
`;

export const IconArrowUpRight = (props) => (
  <Icon className="bi bi-arrow-up-right icon-arrow-up-right" {...props}></Icon>
);
export const IconSearch = (props) => (
  <Icon className="bi bi-search icon-search" {...props}></Icon>
);
export const IconMenu = (props) => (
  <Icon className="bi bi-list icon-menu" {...props}></Icon>
);
export const IconClose = (props) => (
  <Icon className="bi bi-x-lg icon-close" {...props}></Icon>
);
export const IconDropdown = (props) => (
  <Icon className="bi bi-chevron-down icon-dropdown" {...props}></Icon>
);
export const IconLocation = (props) => (
  <Icon className="bi bi-geo-alt-fill icon-location" {...props}></Icon>
);
export const IconDropdownFill = (props) => (
  <Icon className="bi bi-caret-down-fill icon-dropdown-fill" {...props}></Icon>
);
export const IconCrosshair = (props) => (
  <Icon className="bi bi-crosshair icon-crosshair" {...props}></Icon>
);
export const IconSwiperNext = (props) => (
  <Icon className="bi bi-chevron-right icon-swiper-next" {...props}></Icon>
);
export const IconSwiperPrev = (props) => (
  <Icon className="bi bi-chevron-left icon-swiper-prev" {...props}></Icon>
);
export const IconFilter = (props) => (
  <Icon className="bi bi-filter icon-filter" {...props}></Icon>
);
