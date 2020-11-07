import React from 'react';
import { number, string, bool, oneOfType, array, element } from 'prop-types';

import SectionHeader from '@components/SectionHeader';

import styled from './styled';

const Section = ({ icon, order, sticky, title, children }) => (
  <styled.Section order={order}>
    <SectionHeader sticky={sticky} icon={icon} title={title} />
    <styled.Content>
      { children }
    </styled.Content>
  </styled.Section>
);

Section.propTypes = {
  order: number,
  icon: string,
  title: string,
  sticky: bool,
  children: oneOfType([array, element]).isRequired
};

Section.defaultProps = {
  order: 0,
  icon: '',
  title: '',
  sticky: false
};

export default Section;
