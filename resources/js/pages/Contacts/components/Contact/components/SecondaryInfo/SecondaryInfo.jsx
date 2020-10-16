import React from 'react';
import { connect } from 'react-redux';
import { objectOf, any } from 'prop-types';
import sections from '@utils/sections';

import Datafield from '@components/Datafield';
import ProfileSection from '@components/ProfileSection';

import styled from './styled';

const getName = (field) => {
  const {
    number,
    email,
    username,
    network,
    type
  } = field || {};

  const {
    url: networkUrl,
    startWith
  } = network || {};

  if (network)
    return type ? networkUrl : `${startWith || ''}${username}`;

  return number || email;
};

const getLabel = (field) => {
  const {
    network,
    type,
    custom_label: customLabel
  } = field || {};

  const {
    id: typeId,
    name: typeName
  } = type || network || {};

  return customLabel && typeId === 999 ? customLabel : typeName;
};

const getUrl = (field, urlStart) => {
  const {
    number,
    email,
    username,
    network
  } = field || {};

  const {
    url: networkUrl,
    usernameFirst
  } = network || {};

  let url;

  if (network)
    url = usernameFirst ? `${username}${networkUrl}` : `${networkUrl || ''}${username}`;
  else
    url = number || email;

  return `${urlStart}${url}`;
};

const renderData = (data, urlStart) => (
  data.map((field) => {
    const { id } = field || {};

    const name = getName(field);
    const label = getLabel(field);
    const url = getUrl(field, urlStart);

    return (
      <Datafield
        name={name}
        label={label}
        url={url}
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
