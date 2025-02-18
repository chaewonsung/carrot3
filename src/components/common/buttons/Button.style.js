import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['fullWidth', 'fw', 'round', 'fz'].includes(prop),
})`
  padding: 0.66em 0.8em;
  text-align: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : null)};
  font-weight: ${({ fw }) => fw || null};
  border-radius: ${({ round }) => (round ? '99px' : '5px')};
  font-size: ${({ fz }) => fz || null};
`;

export const ButtonSymbol = styled(Button)`
  background-color: ${palette.carrot[0]};
  color: ${palette.carrot[6]};
  &:hover {
    background-color: ${palette.carrot[1]};
  }
`;

export const ButtonSymbolDark = styled(Button)`
  background-color: ${palette.carrot[5]};
  color: ${palette.gray[0]};
  &:hover {
    background-color: ${palette.carrot[4]};
  }
`;

export const ButtonGray = styled(Button)`
  background-color: ${palette.gray[3]};
`;

export const ButtonGrayHover = styled(Button)`
  background-color: ${palette.gray[2]};
  &:hover {
    background-color: ${palette.gray[3]};
  }
`;
