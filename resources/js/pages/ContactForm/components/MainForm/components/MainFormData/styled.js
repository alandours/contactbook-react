import styled, { css } from 'styled-components';
import { responsive } from '@theme/mixins';

import PageHeader from '@components/PageHeader';
import Checkbox from '@components/Form/Checkbox';

const MainInfo = styled(PageHeader)`
  padding: 1rem;
`;

const FieldContainer = styled.div`
  display: flex;
  margin: 0.25rem 0;

  ${({ type }) => type === 'multiline' && css`
    flex-wrap: wrap;
  `}

  ${responsive.tablet`
    flex-wrap: nowrap;
  `}
`;

const RemoveImageCheckbox = styled(Checkbox)`
  bottom: -6px;
  position: absolute;

  ${responsive.tablet`
    bottom: -10px;
  `}
`;

export default { MainInfo, FieldContainer, RemoveImageCheckbox };
