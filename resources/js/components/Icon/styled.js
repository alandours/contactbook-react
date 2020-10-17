import styled from 'styled-components';
import { getColor } from '@theme/mixins';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  color: ${getColor('grey', 'darkest')};

  ${({ color }) => !!color && !!color.length && `
    color: ${getColor(...color)};
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
