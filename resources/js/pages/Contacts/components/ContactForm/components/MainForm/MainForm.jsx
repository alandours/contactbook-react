import React from 'react';
import { useFormContext } from 'react-hook-form';

import Gradient from '@components/Gradient';
import ProfilePicture from '@components/ProfilePicture';
import MainFormData from './components/MainFormData';

import styled from './styled';

const MainForm = () => {
  const [file, setFile] = React.useState(null);

  const { register } = useFormContext();

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Gradient smooth />
      <styled.MainForm>
        <styled.PhotoLabel>
          <ProfilePicture
            uploadedPhoto={file ? URL.createObjectURL(file) : null}
            isForm
          />
          <input type="file" style={{ display: 'none' }} name="image" ref={register} onChange={fileHandler} />
        </styled.PhotoLabel>
        <input type="checkbox" name="removeImage" ref={register} />
        <MainFormData />
      </styled.MainForm>
    </>
  );
};

export default MainForm;
