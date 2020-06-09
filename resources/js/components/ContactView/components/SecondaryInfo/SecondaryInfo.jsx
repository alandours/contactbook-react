import React from 'react';
import { objectOf, any } from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faPhone, faEnvelope, faShareAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons';

import Icon from '@components/Icon';

import styled from './styled';

library.add(faUser, faPhone, faEnvelope, faShareAlt, faStickyNote);

const renderSection = (section) => {
  const { title, icon, data, order, urlStart } = section;

  return data && !!data.length && (
    <styled.Section key={title} order={order}>
      <styled.Title>
        { !!icon && <Icon icon={icon} />}
        {title}
      </styled.Title>
      <>
        {
          title === 'Notes' ? <styled.Notes>{data}</styled.Notes> : (
            data.map((datafield) => {
              const {
                id,
                alias = null,
                email = null,
                number = null,
                username = null,
                network = null,
                type = null,
                custom_label: customLabel
              } = datafield || {};

              let name = alias;
              let label;
              let url;

              if (!alias) {
                const {
                  name: typeName,
                  url: networkUrl,
                  usernameFirst
                } = type || network || {};

                label = (customLabel && typeName === 'custom' ? customLabel : typeName);
                url = email || number || (usernameFirst ? `${username}${networkUrl}` : `${networkUrl}${username}`);
                name = type ? url : `@${username}`;
              }

              return (
                <styled.Datafield key={id + name}>
                  { title === 'Aliases' ? <styled.Text>{name}</styled.Text> : (
                    <styled.Link href={`${urlStart}${url}`}>
                      <styled.Name>{name}</styled.Name>
                      <styled.Label>{label}</styled.Label>
                    </styled.Link>
                  )}
                </styled.Datafield>
              );
            })
          )
        }
      </>
    </styled.Section>
  );
};

const SecondaryInfo = ({ contact }) => {
  const { aliases, numbers, emails, social_networks: socialNetworks, notes } = contact;

  const sections = [
    {
      title: 'Aliases',
      icon: 'user',
      data: aliases,
      order: 1
    },
    {
      title: 'Numbers',
      icon: 'phone',
      data: numbers,
      order: 2,
      urlStart: 'tel:'
    },
    {
      title: 'Emails',
      icon: 'envelope',
      data: emails,
      order: 3,
      urlStart: 'mailto:'
    },
    {
      title: 'Social Networks',
      icon: 'share-alt',
      data: socialNetworks,
      order: 4,
      urlStart: 'https://'
    },
    {
      title: 'Notes',
      icon: 'sticky-note',
      data: notes,
      order: 5
    }
  ];

  return (
    <styled.SecondaryInfo>
      { sections.map((section) => renderSection(section))}
    </styled.SecondaryInfo>
  );
};

SecondaryInfo.propTypes = {
  contact: objectOf(any).isRequired
};

export default SecondaryInfo;
