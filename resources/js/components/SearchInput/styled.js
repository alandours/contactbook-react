import styled from 'styled-components';
import { getColor, formStyles } from '@theme/mixins';
import zindex from '@theme/zindex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: ${zindex.fixed};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${getColor('grey', 'darker')};
  font-size: 0.8rem;
  left: 6px;
  position: absolute;
  top: 9px;
`;

const SearchInput = styled.input`
  ${formStyles};
  border-color: ${getColor('grey', 'lighter')};
  border-radius: 4px 0 0 0;

  &:hover, &:focus {
    border-color: ${getColor('grey', 'lighter')};
  }
`;

export default { Container, Icon, SearchInput };
