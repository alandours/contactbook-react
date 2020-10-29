import styled from 'styled-components';

import RoundLink from '@components/RoundLink';

const MainInfo = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem;
  width: 100%;
  z-index: 1000;
`;

const EditLink = styled(RoundLink)`
  align-self: flex-start !important;
`;

export default { MainInfo, EditLink };
