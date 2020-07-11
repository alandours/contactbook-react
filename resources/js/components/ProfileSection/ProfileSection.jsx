import React from 'react';
import { number, string, bool, oneOfType, array, element } from 'prop-types';

import SectionHeader from '@components/SectionHeader';

import styled from './styled';

const ProfileSection = ({ icon, order, sticky, title, children }) => (
  <styled.ProfileSection order={order}>
    <SectionHeader sticky={sticky} icon={icon} title={title} />
    <styled.Content>
      { children }
    </styled.Content>
  </styled.ProfileSection>
);

ProfileSection.propTypes = {
  order: number,
  icon: string,
  title: string,
  sticky: bool,
  children: oneOfType([array, element]).isRequired
};

ProfileSection.defaultProps = {
  order: 0,
  icon: '',
  title: '',
  sticky: false
};

export default ProfileSection;
