import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { objectOf, any } from 'prop-types';

import Icon from '@components/Icon';
import Gradient from '@components/Gradient';
import ProfilePicture from '@components/ProfilePicture';
import ProfileData from './components/ProfileData';

import styled from './styled';

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const MainInfo = ({ contact }) => {
  const [palette, setPalette] = useState([]);

  const { id } = contact;

  return (
    <>
      <Gradient palette={palette} smooth />
      <styled.MainInfo>
        <ProfilePicture setPalette={setPalette} />
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
