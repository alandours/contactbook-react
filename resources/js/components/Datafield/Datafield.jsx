import React from 'react';
import { string } from 'prop-types';

import styled from './styled';

const Datafield = ({ name, label, url }) => (
  <styled.Datafield>
    {
      url || label ? (
        <styled.DataContainer href={url} as={url ? 'a' : 'div'}>
          <styled.Name>{name}</styled.Name>
          <styled.Label>{label}</styled.Label>
        </styled.DataContainer>
      ) : <styled.Text>{name}</styled.Text>
    }
  </styled.Datafield>
);

Datafield.propTypes = {
  name: string,
  label: string,
  url: string
};

Datafield.defaultProps = {
  name: '',
  label: '',
  url: ''
};

export default Datafield;
