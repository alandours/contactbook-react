import styled from 'styled-components';
import { getColor } from '@theme/mixins';

const ContactGroup = styled.ul`
  position: relative;
`;

const Count = styled.div`
  border-top: 1px solid ${getColor('main', 3)};
  color: ${getColor('contrast', 2)};
  padding: 1rem !important;
  text-align: center;
`;

export default { ContactGroup, Count };
