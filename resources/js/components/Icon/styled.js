import styled from 'styled-components';
import { getColor } from '@theme/mixins';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  color: ${getColor('grey', 'darkest')};

  ${({ inline }) => inline && `
    margin-right: 0.5rem;
  `}

  ${({ icon }) => icon === 'home' && `
    margin-left: -2px;
  `}
`;

export default { Icon };
