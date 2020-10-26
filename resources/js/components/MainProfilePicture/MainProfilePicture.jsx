import React, { useState } from 'react';
import { connect } from 'react-redux';
import { objectOf, any } from 'prop-types';

import Backdrop from '@components/Backdrop';
import ProfilePicture from '@components/ProfilePicture';

import styled from './styled';

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const MainProfilePicture = ({ contact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { photo, fullName } = contact;

  return (
    <>
      { isOpen && (
        <Backdrop
          handleClick={() => setIsOpen(false)}
          handleKeyDown={() => setIsOpen(false)}
        >
          <styled.FullSizePicture
            src={`/img/contacts/${photo}`}
            alt={`${fullName}'s profile picture`}
          />
        </Backdrop>
      )}
      <ProfilePicture contact={contact} handleClick={() => setIsOpen(true)} />
    </>
  );
};

MainProfilePicture.propTypes = {
  contact: objectOf(any).isRequired
};

export default connect(mapStateToProps)(MainProfilePicture);
