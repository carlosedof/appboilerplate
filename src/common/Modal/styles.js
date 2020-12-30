import styled from 'styled-components/native';
import { Metrics } from '../../config';

export const Container = styled.View`
  padding: ${Metrics.spacing.lg}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FirstImage = styled.Image`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-bottom: ${Metrics.spacing.lg}px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: ${Metrics.spacing.lg}px;
`;

export const CloseButtonContainer = styled.View`
  height: 30px;
  justify-content: center;
  align-items: flex-end;
`;
