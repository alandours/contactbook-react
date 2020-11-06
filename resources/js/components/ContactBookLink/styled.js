import styled, { css } from 'styled-components';
import { buttonStyles, linkStyles } from '@theme/mixins';

import { Link } from 'react-router-dom';

const ContactBookLink = styled(Link)`
 ${linkStyles};

 ${({ variant }) => variant === 'round' && css`
  ${buttonStyles};
    border-radius: 50%;
    height: 35px;
    min-width: 35px;
    padding: 0;
 `}
`;

export default { ContactBookLink };
