import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setContactPalette } from '@store/actions';
import { objectOf, any, func, string, bool } from 'prop-types';

import { getPalette } from '@utils/color';

import Backdrop from '@components/Backdrop';

import styled from './styled';

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const mapDispatchToProps = {
  setContactPalette
};

const ProfilePicture = ({ edit, contact, uploadedPhoto, setContactPalette }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { photo, fullName, palette } = contact;

  const imageRef = useRef(null);

  const handlePalette = () => {
    const currentPalette = getPalette(imageRef.current, 10);
    if (!palette || currentPalette.toString() !== palette.toString())
      setContactPalette(currentPalette);
  };

  return (
    <>
      { isOpen && (
        <Backdrop
          handleClick={() => setIsOpen(false)}
          handleKeyDown={() => setIsOpen(false)}
        >
          <styled.FullSizePicture
            src={uploadedPhoto || `/img/contacts/${photo}`}
            alt={`${fullName}'s profile picture`}
          />
        </Backdrop>
      )}
      <styled.ProfilePicture
        src={uploadedPhoto || `/img/contacts/${photo}`}
        alt={`${fullName}'s profile picture`}
        ref={imageRef}
        onLoad={handlePalette}
        onClick={() => photo && !edit && setIsOpen(true)}
      />
    </>
  );
};

ProfilePicture.propTypes = {
  edit: bool,
  contact: objectOf(any).isRequired,
  setContactPalette: func,
  uploadedPhoto: string
};

ProfilePicture.defaultProps = {
  edit: false,
  setContactPalette: () => {},
  uploadedPhoto: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
