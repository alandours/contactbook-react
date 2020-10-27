import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import { func, objectOf, any, bool } from 'prop-types';
import { setContactPalette } from '@store/actions';
import { getPalette } from '@utils/color';

import styled from './styled';

const mapDispatchToProps = {
  setContactPalette
};

const ProfilePicture = ({ thumbnail, contact, setContactPalette, handleClick }) => {
  const [uploaded, setUploaded] = useState(null);
  const { watch } = useFormContext() || {};
  const imageRef = useRef(null);

  const { photo, fullName, palette } = contact;

  const imageField = watch && watch('image');
  const uploadedImage = imageField && imageField[0];

  useEffect(() => {
    if (uploadedImage)
      setUploaded(URL.createObjectURL(uploadedImage));
  }, [uploadedImage]);

  const handlePalette = () => {
    if (thumbnail || uploaded) return;
    const currentPalette = getPalette(imageRef.current, 10);
    if (!palette || currentPalette.toString() !== palette.toString())
      setContactPalette(currentPalette);
  };

  return (
    <styled.ProfilePicture
      src={uploaded || `/img/contacts/${photo || 'contact.jpg'}`}
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

export default connect(null, mapDispatchToProps)(ProfilePicture);
