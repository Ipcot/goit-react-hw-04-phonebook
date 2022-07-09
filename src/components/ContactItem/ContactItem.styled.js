import styled from 'styled-components';

export const ContactInfo = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px;
`;

export const ContactItemButton = styled.button`
  display: flex;
  align-items: bottom;
  gap: 5px;
  border: ${p => p.theme.borders.greyBorder};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};

  > svg {
    color: blue;
  }

  :hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;
