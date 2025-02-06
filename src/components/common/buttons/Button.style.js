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
  border-radius: ${({ round }) => (round ? '99px' : '3px')};
  font-size: ${({ fz }) => fz || null};
`;

const ButtonSymbol = styled(Button)`
  background-color: ${palette.carrot[0]};
  color: ${palette.carrot[6]};
  &:hover {
    background-color: ${palette.carrot[1]};
  }
`;

const ButtonSymbolDark = styled(Button)`
  background-color: ${palette.carrot[5]};
  color: ${palette.gray[0]};
  &:hover {
    background-color: ${palette.carrot[4]};
  }
`;

const ButtonGray = styled(Button)`
  background-color: ${palette.gray[3]};
`;

const ButtonGrayHover = styled(Button)`
  background-color: ${palette.gray[2]};
  &:hover {
    background-color: ${palette.gray[3]};
  }
`;

export const BtnSymbol = (props) => (
  <ButtonSymbol {...props}>{props.children}</ButtonSymbol>
);
export const BtnSymbolDark = (props) => (
  <ButtonSymbolDark {...props}>{props.children}</ButtonSymbolDark>
);
export const BtnGray = (props) => (
  <ButtonGray {...props}>{props.children}</ButtonGray>
);
export const BtnGrayHover = (props) => (
  <ButtonGrayHover {...props}>{props.children}</ButtonGrayHover>
);
