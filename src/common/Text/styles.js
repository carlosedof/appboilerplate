import styled from 'styled-components/native';

export const TextStyled = styled.Text`
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ size }) => size};
  font-weight: ${({ bolder }) => (bolder ? 'bold' : 'normal')};
  ${({ width }) => {
    if (width) {
      return `width: ${width}%`;
    }
    return ``;
  }}
  ${({ uppercase }) => {
    if (uppercase) {
      return `text-transform: uppercase`;
    }
    return ``;
  }}
`;
