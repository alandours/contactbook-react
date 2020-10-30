import styled from 'styled-components';

import PageHeader from '@components/PageHeader';
import RoundLink from '@components/RoundLink';

const MainInfo = styled(PageHeader)`
  align-items: center;
  display: flex;
`;

const EditLink = styled(RoundLink)`
  align-self: flex-start !important;
`;

export default { MainInfo, EditLink };
