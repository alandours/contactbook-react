import styled from 'styled-components';
import { size } from '@theme/typography';

import Icon from '@components/Icon';

const CloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font-size: ${size.medium};
`;

const RemoveIcon = styled(Icon)`
  color: red;
`;

export default { CloseButton, RemoveIcon };
