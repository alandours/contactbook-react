import React from 'react';
import { func } from 'prop-types';

import styled from './styled';

const SearchInput = ({ handleTyping }) => (
  <styled.Container>
    <styled.Icon icon="search" />
    <styled.SearchInput
      type="search"
      placeholder="Search contacts"
      onKeyUp={handleTyping}
      hasIcon
    />
  </styled.Container>
);

SearchInput.propTypes = {
  handleTyping: func
};

SearchInput.defaultProps = {
  handleTyping: () => {}
};

export default SearchInput;
