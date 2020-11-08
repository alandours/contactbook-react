import styled from 'styled-components';
import { responsive } from '@theme/mixins';

import PageHeader from '@components/PageHeader';
import ContactBookLink from '@components/ContactBookLink';

const MainInfo = styled(PageHeader)`
  align-items: center;
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;

  ${responsive.tablet`
    flex-wrap: nowrap;
  `}
`;

const EditLink = styled(ContactBookLink)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  ${responsive.tablet`
    align-self: flex-start !important;
    position: relative;
    right: 0;
    top: 0;
  `}
`;

export default { MainInfo, EditLink };
