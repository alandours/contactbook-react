import React from 'react';
import { useFormContext } from 'react-hook-form';

import Gradient from '@components/Gradient';
import ProfilePicture from '@components/ProfilePicture';
import MainFormData from './components/MainFormData';

import styled from './styled';

const MainForm = () => {
  const { register } = useFormContext();

  return (
    <>
      <Gradient smooth />
      <styled.MainForm>
        <styled.PhotoLabel>
          <ProfilePicture />
          <styled.ImageInput type="file" name="image" ref={register} />
        </styled.PhotoLabel>
        <input type="checkbox" name="removeImage" ref={register} />
        <MainFormData />
      </styled.MainForm>
    </>
  );
};

export default MainForm;
