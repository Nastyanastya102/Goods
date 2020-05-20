import styled from 'styled-components';

export const Close = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
  font-size: 1.5rem;
  text-align: right;
  cursor: pointer;
  color: ${props => props.yellow ? '#ffc107' : '#000'};
`;
