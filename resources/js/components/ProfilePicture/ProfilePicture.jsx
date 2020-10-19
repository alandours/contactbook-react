import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import { func, objectOf, any, bool } from 'prop-types';
import { setContactPalette } from '@store/actions';
import { getPalette } from '@utils/color';

import styled from './styled';

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const mapDispatchToProps = {
  setContactPalette
};

const ProfilePicture = ({ thumbnail, contact, setContactPalette, handleClick }) => {
  const [uploaded, setUploaded] = useState(null);
  const { watch } = useFormContext() || {};
  const imageRef = useRef(null);

  const { photo, fullName, palette } = contact;

  if (!uploaded && watch) {
    const imageFile = watch('image');

    if (imageFile && imageFile[0])
      setUploaded(URL.createObjectURL(imageFile[0]));
  }

  const handlePalette = () => {
    if (thumbnail || uploaded) return;
    const currentPalette = getPalette(imageRef.current, 10);
    if (!palette || currentPalette.toString() !== palette.toString())
      setContactPalette(currentPalette);
  };

  return (
    <styled.ProfilePicture
      src={uploaded || `/img/contacts/${photo}`}
      alt={`${fullName}'s profile picture`}
      thumbnail={thumbnail}
      ref={imageRef}
      onLoad={handlePalette}
      onClick={handleClick}
    />
  );
};

ProfilePicture.propTypes = {
  thumbnail: bool,
  contact: objectOf(any).isRequired,
  setContactPalette: func,
  handleClick: func
};

ProfilePicture.defaultProps = {
  thumbnail: false,
  setContactPalette: () => {},
  handleClick: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
