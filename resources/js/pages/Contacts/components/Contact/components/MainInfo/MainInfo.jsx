import React from 'react';
import { connect } from 'react-redux';
import { objectOf, any } from 'prop-types';

import Gradient from '@components/Gradient';
import Icon from '@components/Icon';
import MainProfilePicture from '@components/MainProfilePicture';
import ProfileData from './components/ProfileData';

import styled from './styled';

const mapStateToProps = (state) => state;

const MainInfo = ({ contact }) => {
  const { id } = contact || {};

  return (
    <>
      <Gradient smooth />
      <styled.MainInfo>
        <MainProfilePicture />
        <ProfileData contact={contact} />
        <styled.EditLink to={`/contacts/${id}/edit`} title="Edit contact">
          <Icon icon="pen" color={['common', 'white']} />
        </styled.EditLink>
      </styled.MainInfo>
    </>
  );
};

MainInfo.propTypes = {
  contact: objectOf(any).isRequired
};

export default connect(mapStateToProps)(MainInfo);
