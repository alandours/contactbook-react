import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import zindex from '@theme/zindex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputIcon = styled.div`
  background: ${getColor('common', 'white')};
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${zindex.fixed};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${getColor('grey', 'dark')};
  font-size: 0.8rem;
  left: 6px;
  position: absolute;
  top: 9px;
`;

export default { InputIcon, Icon };
