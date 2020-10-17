import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { setContactPalette } from '@store/actions';
import { objectOf, any, func, string } from 'prop-types';

import { getPalette } from '@utils/color';

import styled from './styled';

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const mapDispatchToProps = {
  setContactPalette
};

const ProfilePicture = ({ contact, uploadedPhoto, setContactPalette }) => {
  const { photo, fullName } = contact;

  const imageRef = useRef(null);

  const openProfilePicture = () => {

  };

  return (
    <styled.ProfilePicture
      src={uploadedPhoto || `/img/contacts/${photo}`}
      alt={`${fullName}'s profile picture`}
      ref={imageRef}
      onLoad={() => setContactPalette(getPalette(imageRef.current, 10))}
      onClick={openProfilePicture}
    />
  );
};

ProfilePicture.propTypes = {
  contact: objectOf(any).isRequired,
  setContactPalette: func,
  uploadedPhoto: string
};

ProfilePicture.defaultProps = {
  setContactPalette: () => {},
  uploadedPhoto: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
