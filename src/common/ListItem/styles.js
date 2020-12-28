import styled from 'styled-components/native';

export const CircleIcon = styled.View`
  ${({ border }) => `border-width: 1px; border-color: ${border};`}
  width: 60%;
  margin-top: 25%;
  margin-left: 7%;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  height: 50px;
  align-items: center;
`;
