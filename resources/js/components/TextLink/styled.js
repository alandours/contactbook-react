import styled, { css } from 'styled-components';
import { weight, size } from '@theme/typography';

import { Link } from 'react-router-dom';

const TextLink = styled(Link)`
  align-self: flex-end;
  background: none;
  border: 0;
  color: ${({ theme }) => theme.selected.contrast[2]};
  font-size: ${size.text};
  font-weight: ${weight.regular};
  padding: 0;
  text-align: right;
  width: auto;

  ${({ highlight }) => !!highlight && css`
    color: ${({ theme }) => theme.mainColor.dark};
  `};

  &:hover {
    color: ${({ theme }) => theme.mainColor.dark};
  }
`;

export default { TextLink };
