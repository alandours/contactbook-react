import React from 'react';
import { connect } from 'react-redux';
import { objectOf, any } from 'prop-types';
import sections from '@utils/sections';

import Datafield from '@components/Datafield';
import ProfileSection from '@components/ProfileSection';

import styled from './styled';

const renderData = (data, urlStart) => (
  data.map((field) => {
    const {
      id,
      email = null,
      number = null,
      username = null,
      network = null,
      type = null,
      custom_label: customLabel
    } = field || {};

    const {
      name: typeName,
      url: networkUrl,
      usernameFirst
    } = type || network || {};

    const label = (customLabel && typeName === 'custom' ? customLabel : typeName);
    const url = email || number || (usernameFirst ? `${username}${networkUrl}` : `${networkUrl}${username}`);
    const name = type ? url : `@${username}`;
    const fieldUrl = `${urlStart}${url}`;

    return (
      <Datafield
        name={name}
        label={label}
        url={fieldUrl}
        key={id + name}
      />
    );
  })
);

const renderAliases = (aliases) => (
  aliases.map((alias) => {
    const { id, alias: aliasName } = alias || {};

    return (
      <Datafield
        name={aliasName}
        key={id + alias}
      />
    );
  })
);

const renderSection = (key, data, urlStart) => {
  switch (key) {
    case 'notes':
      return <styled.Notes>{data}</styled.Notes>;
    case 'aliases':
      return renderAliases(data);
    default:
      return renderData(data, urlStart);
  }
};

const renderSecondaryInfo = (contact) => {
  return sections.map((section) => {
    const { title, icon, key, order, urlStart } = section;
    const data = contact[key];

    return !!data && !!data.length && (
      <ProfileSection
        icon={icon}
        key={key}
        order={order}
        sticky
        title={title}
      >
        <>
          { renderSection(key, data, urlStart) }
        </>
      </ProfileSection>
    );
  });
};

const mapStateToProps = (state) => state;

const SecondaryInfo = ({ contact }) => (
  <styled.SecondaryInfo>
    { renderSecondaryInfo(contact) }
  </styled.SecondaryInfo>
);

SecondaryInfo.propTypes = {
  contact: objectOf(any).isRequired
};

export default connect(mapStateToProps)(SecondaryInfo);
