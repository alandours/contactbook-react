import React from 'react';
import { connect } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import { objectOf, any } from 'prop-types';

import Gradient from '@components/Gradient';
import ProfilePicture from '@components/ProfilePicture';
import MainFormData from './components/MainFormData';

import styled from './styled';

const mapStateToProps = (ownProps, state) => ({
  ...ownProps,
  ...state
});

const MainForm = ({ contact }) => {
  const { register } = useFormContext();

  return (
    <>
      <Gradient smooth />
      <styled.MainForm>
        <styled.PhotoLabel>
          <ProfilePicture contact={contact} />
          <styled.ImageInput type="file" name="image" ref={register} />
        </styled.PhotoLabel>
        <input type="checkbox" name="removeImage" ref={register} />
        <MainFormData />
      </styled.MainForm>
    </>
  );
};

MainForm.propTypes = {
  contact: objectOf(any).isRequired
};

export default connect(mapStateToProps)(MainForm);
