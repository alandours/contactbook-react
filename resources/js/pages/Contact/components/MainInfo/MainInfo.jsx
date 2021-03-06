import React from 'react';
import { connect } from 'react-redux';
import { objectOf, any } from 'prop-types';

import Gradient from '@components/Gradient';
import MainProfilePicture from '@components/MainProfilePicture';
import Icon from '@components/Icon';
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
        <styled.EditLink
          url={`/contacts/${id}/edit`}
          title="Edit contact"
          variant="round"
        >
          <Icon icon="pen" color={['selected', 'main', '1']} />
        </styled.EditLink>
      </styled.MainInfo>
    </>
  );
};

MainInfo.propTypes = {
  contact: objectOf(any).isRequired
};

export default connect(mapStateToProps)(MainInfo);
