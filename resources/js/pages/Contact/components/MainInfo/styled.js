import styled from 'styled-components';

import PageHeader from '@components/PageHeader';
import ContactBookLink from '@components/ContactBookLink';

const MainInfo = styled(PageHeader)`
  align-items: center;
  display: flex;
  padding: 1rem;
`;

const EditLink = styled(ContactBookLink)`
  align-self: flex-start !important;
`;

export default { MainInfo, EditLink };
