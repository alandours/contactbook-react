import styled from 'styled-components';
import { size } from '@theme/typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Checkbox = styled.label`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const CheckboxIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.mainColor.main};
`;

const CheckboxText = styled.span`
  color: ${({ theme }) => theme.selected.contrast[1]};
  margin-left: 0.5rem;
  font-size: ${size.small};
`;

const OriginalCheckbox = styled.input`
  display: none;
`;

export default { Checkbox, CheckboxIcon, CheckboxText, OriginalCheckbox };
