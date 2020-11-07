import React from 'react';
import { useSelector } from 'react-redux';
import { string } from 'prop-types';
import { getRandomContact } from '@utils/contacts';

import styled from './styled';

const NotFound = ({ page }) => {
  let title = "This page doesn't exist";

  let subtitle = (
    <>
      Go back&nbsp;
      <styled.NotFoundLink url="/" highlight>home</styled.NotFoundLink>
    </>
  );

  if (page === 'contact') {
    const contacts = useSelector((state) => state.contactList && state.contactList.list);
    const randomContact = contacts && getRandomContact(contacts);
    const { id, name } = randomContact || {};

    title = "This is not the contact you're looking for";

    subtitle = (
      <>
        Try a different one, like&nbsp;
        <styled.NotFoundLink url={`/contacts/${id}`} highlight>{name}</styled.NotFoundLink>
      </>
    );
  }

  return (
    <styled.NotFound>
      <styled.NotFoundTitle>
        <styled.NotFoundIcon icon="heart-broken" />
        { title }
      </styled.NotFoundTitle>
      <styled.NotFoundSubtitle>
        { subtitle }
      </styled.NotFoundSubtitle>
    </styled.NotFound>
  );
};

NotFound.propTypes = {
  page: string
};

NotFound.defaultProps = {
  page: ''
};

export default NotFound;
