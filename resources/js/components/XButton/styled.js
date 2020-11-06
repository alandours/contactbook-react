import styled from 'styled-components';
import { size } from '@theme/typography';

import Button from '@components/Button';

const XButton = styled(Button)`
  background: none;
  border: 0;
  cursor: pointer;
  font-size: ${size.medium};
  padding: 0;

  &:hover, &:focus {
    background: none;
  }
`;

export default { XButton };
