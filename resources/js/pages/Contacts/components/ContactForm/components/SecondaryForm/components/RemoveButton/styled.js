import styled from 'styled-components';
import { size } from '@theme/typography';

const RemoveButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font-size: ${size.medium};
  margin-left: 1.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all ease 200ms;
`;

export default { RemoveButton };
