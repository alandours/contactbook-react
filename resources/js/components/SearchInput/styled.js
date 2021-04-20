import styled from 'styled-components';
import { formStyles } from '@theme/mixins';
import zindex from '@theme/zindex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  position: sticky;
  top: 0;
  z-index: ${zindex.fixed};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.selected.contrast[3]};
  font-size: 0.8rem;
  left: 6px;
  position: absolute;
  top: 9px;
  transition: all 420ms ease;
  transition-property: color;
`;

const SearchInput = styled.input`
  ${formStyles};
  background: ${({ theme }) => theme.selected.main[1]};
  border-color: ${({ theme }) => theme.selected.main[2]};
  border-radius: 4px 0 0 0;
  transition: all 420ms ease;
  transition-property: background, border;

  &::placeholder {
    transition: all 420ms ease;
    transition-property: color;
  }

  &:hover, &:focus {
    border-color: ${({ theme }) => theme.selected.main[2]};
  }
`;

export default { Container, Icon, SearchInput };
