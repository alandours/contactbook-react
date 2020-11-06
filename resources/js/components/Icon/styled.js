import styled, { css } from 'styled-components';
import { getColor } from '@theme/mixins';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.selected.contrast[2]};

  ${({ theme, color }) => !!color && !!color.length && css`
    color: ${getColor(theme, color)};
  `};

  ${({ inline }) => !!inline && `
    margin-right: 0.75rem;
  `}

  ${({ icon }) => icon === 'home' && `
    margin-left: -2px;
    margin-right: 0.65rem;
  `}
`;

export default { Icon };
