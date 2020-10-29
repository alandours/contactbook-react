import styled from 'styled-components';
import { size } from '@theme/typography';

const FavoriteIcon = styled.span`
  font-size: ${size.small};
  margin: 0 0.5rem;
`;

const FavoriteButton = styled.button`
  align-self: flex-start;
  background: none;
  border: 0;
  cursor: pointer;
  font-size: ${size.large};
  margin-top: 3px;
  padding: 0.25rem;
`;

export default { FavoriteIcon, FavoriteButton };
