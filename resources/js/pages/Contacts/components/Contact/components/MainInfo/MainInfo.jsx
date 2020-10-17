import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { objectOf, any } from 'prop-types';

import Icon from '@components/Icon';
import Gradient from '@components/Gradient';
import ProfilePicture from '@components/ProfilePicture';
import ProfileData from './components/ProfileData';

import styled from './styled';

const mapStateToProps = (state) => state;

const MainInfo = ({ contact }) => {
  const { id } = contact || {};

  return (
    <>
      <Gradient smooth />
      <styled.MainInfo>
        <ProfilePicture />
        <ProfileData contact={contact} />
        <Link to={`/contacts/${id}/edit`}>
          <Icon icon="pen" />
        </Link>
      </styled.MainInfo>
    </>
  );
};

MainInfo.propTypes = {
  contact: objectOf(any).isRequired
};

export default connect(mapStateToProps)(MainInfo);
