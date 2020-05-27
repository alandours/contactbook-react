import React from 'react';
import { string } from 'prop-types';

import styled from './styled';

const EditContact = ({ id }) => {
	return (
  <div>EditContact {id}</div>
  );
};

EditContact.propTypes = {
  id: string.isRequired
};

export default EditContact;
