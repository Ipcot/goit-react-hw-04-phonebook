import styled from 'styled-components';

export const ContactsFormInput = styled.input`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
`;

export const FormStyled = styled.form`
  padding: ${p => p.theme.space[5]}px;
  border: 1px solid ${p => p.theme.colors.black};
`;
export const ContactsFormLabel = styled.label`
  display: block;
  margin: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.greyBorder};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  :hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;
