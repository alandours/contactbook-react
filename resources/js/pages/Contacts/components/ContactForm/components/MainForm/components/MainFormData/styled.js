import styled from 'styled-components';

import Checkbox from '@components/Checkbox';

const FieldContainer = styled.div`
  display: flex;
  margin: 0.25rem 0;
`;

const RemoveImageCheckbox = styled(Checkbox)`
  bottom: -10px;
  position: absolute;
`;

export default { FieldContainer, RemoveImageCheckbox };
