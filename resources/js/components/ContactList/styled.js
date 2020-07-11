import styled from 'styled-components';
import { getColor } from '@theme/mixins';

const ContactGroup = styled.ul`
  position: relative;
`;

const Count = styled.div`
  border-top: 1px solid ${getColor('grey', 'normal')};
  color: ${getColor('grey', 'darkest')};
  padding: 1rem !important;
  text-align: center;
`;

export default { ContactGroup, Count };
