import styled from 'styled-components';
import { formStyles } from '@theme/mixins';
import zindex from '@theme/zindex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
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
`;

const SearchInput = styled.input`
  ${formStyles};
  background: ${({ theme }) => theme.selected.main[1]};
  border-color: ${({ theme }) => theme.selected.main[2]};
  border-radius: 4px 0 0 0;

  &:hover, &:focus {
    border-color: ${({ theme }) => theme.selected.main[2]};
  }
`;

export default { Container, Icon, SearchInput };
