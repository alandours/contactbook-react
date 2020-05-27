import styled from 'styled-components';
import { getColor } from '@theme/mixins';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputIcon = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${getColor('grey', 'dark')};
  font-size: 0.8rem;
  left: 6px;
  position: absolute;
  top: 9px;
`;

export default { InputIcon, Icon };
