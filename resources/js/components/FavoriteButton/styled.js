import styled from 'styled-components';
import { size } from '@theme/typography';
import { responsive } from '@theme/mixins';

const FavoriteButton = styled.button`
  align-self: center;
  background: none;
  border: 0;
  cursor: pointer;
  font-size: ${size.max};
  left: 1.25rem;
  margin-top: 3px;
  padding: 0.25rem;
  position: absolute;
  top: 0.75rem;

  ${responsive.mobile`
    font-size: ${size.large};
    left: 0;
    margin-right: 1rem;
    position: initial;
    top: 0;
  `}


`;

export default { FavoriteButton };
