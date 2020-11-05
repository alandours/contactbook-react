import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.selected.contrast[2]};

  ${({ theme, color, colortype }) => !!color && !!colortype && css`
    color: ${theme.selected[color][colortype]};
  `}

  ${({ inline }) => !!inline && `
    margin-right: 0.75rem;
  `}

  ${({ icon }) => icon === 'home' && `
    margin-left: -2px;
    margin-right: 0.65rem;
  `}
`;

export default { Icon };
