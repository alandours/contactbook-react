import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size } from '@theme/typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Checkbox = styled.label`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const CheckboxIcon = styled(FontAwesomeIcon)`
  color: ${getColor('primary', 'main')};
`;

const CheckboxText = styled.span`
  margin-left: 0.5rem;
  font-size: ${size.small};
`;

const OriginalCheckbox = styled.input`
  display: none;
`;

export default { Checkbox, CheckboxIcon, CheckboxText, OriginalCheckbox };
