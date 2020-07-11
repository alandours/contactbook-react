import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { objectOf, any, func, string } from 'prop-types';

import { getPalette } from '@utils/color';

import styled from './styled';

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const ProfilePicture = ({ contact, setPalette, uploadedPhoto }) => {
  const { photo, fullName } = contact;

  const imageRef = useRef(null);

  const openProfilePicture = () => {

  };

  return (
    <styled.ProfilePicture
      src={uploadedPhoto || `/img/contacts/${photo}`}
      alt={`${fullName}'s profile picture`}
      ref={imageRef}
      onLoad={() => setPalette(getPalette(imageRef.current, 10))}
      onClick={openProfilePicture}
    />
  );
};

ProfilePicture.propTypes = {
  contact: objectOf(any).isRequired,
  setPalette: func,
  uploadedPhoto: string
};

ProfilePicture.defaultProps = {
  setPalette: () => {},
  uploadedPhoto: ''
};

export default connect(mapStateToProps)(ProfilePicture);
