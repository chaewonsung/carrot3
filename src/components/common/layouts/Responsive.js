import { useMediaQuery } from 'react-responsive';
import { mq } from '../../../lib/styles/variables';

export const Medium = ({ children }) => {
  const IsMedium = useMediaQuery({ query: `(max-width:${mq.medium}px)` });
  return <>{IsMedium && children}</>;
};
export const NotMedium = ({ children }) => {
  const isNotMedium = useMediaQuery({
    query: `(min-width:${mq.medium + 1}px)`,
  });
  return <>{isNotMedium && children}</>;
};

export const Small = ({ children }) => {
  const IsSmall = useMediaQuery({ query: `(max-width:${mq.small}px)` });
  return <>{IsSmall && children}</>;
};
export const NotSmall = ({ children }) => {
  const isNotSmall = useMediaQuery({
    query: `(min-width:${mq.small + 1}px)`,
  });
  return <>{isNotSmall && children}</>;
};

// export const Mobile = ({ children }) => {
//   const IsMobile = useMediaQuery({ query: `(max-width:${mq.mobile}px)` });
//   return <>{IsMobile && children}</>;
// };
