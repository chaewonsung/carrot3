import { useMediaQuery } from 'react-responsive';
import { mq } from '../../../lib/styles/variables';

export const Laptop = ({ children }) => {
  const IsLaptop = useMediaQuery({ query: `(max-width:${mq.laptop}px)` });
  return <>{IsLaptop && children}</>;
};
export const NotLaptop = ({ children }) => {
  const isNotLaptop = useMediaQuery({
    query: `(min-width:${mq.laptop + 1}px)`,
  });
  return <>{isNotLaptop && children}</>;
};

export const Tablet = ({ children }) => {
  const IsTablet = useMediaQuery({ query: `(max-width:${mq.tablet}px)` });
  return <>{IsTablet && children}</>;
};
export const NotTablet = ({ children }) => {
  const isNotTablet = useMediaQuery({
    query: `(min-width:${mq.tablet + 1}px)`,
  });
  return <>{isNotTablet && children}</>;
};

export const Mobile = ({ children }) => {
  const IsMobile = useMediaQuery({ query: `(max-width:${mq.mobile}px)` });
  return <>{IsMobile && children}</>;
};
