import styled from 'styled-components';

export const Input = styled.input`
  padding: 0;
  outline: none;
  margin-left: 33%;
  text-align: center;
  :hover,
  :active,
  :focus {
    border: ${p => p.theme.borders.active};
  }
`;
