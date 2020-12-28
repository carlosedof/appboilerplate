import styled from 'styled-components/native';

export const IconContainer = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
