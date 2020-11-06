import styled from 'styled-components';

import PageHeader from '@components/PageHeader';
import Checkbox from '@components/Form/Checkbox';

const MainInfo = styled(PageHeader)`
  padding: 1rem;
`;

const FieldContainer = styled.div`
  display: flex;
  margin: 0.25rem 0;
`;

const RemoveImageCheckbox = styled(Checkbox)`
  bottom: -10px;
  position: absolute;
`;

export default { MainInfo, FieldContainer, RemoveImageCheckbox };
