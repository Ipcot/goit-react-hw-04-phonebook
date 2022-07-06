import styled from 'styled-components';

export const ContactInfo = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px;
`;

export const ContactItemButton = styled.button`
  border: ${p => p.theme.borders.greyBorder};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};

  :hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;
