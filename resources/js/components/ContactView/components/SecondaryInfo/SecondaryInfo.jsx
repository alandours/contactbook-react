import React from 'react';
import { objectOf, any } from 'prop-types';

import styled from './styled';

const renderSection = (section) => {
  const { title, data, order, urlStart } = section;

  return data && !!data.length && (
    <styled.Section key={title} order={order}>
      <styled.Title>{title}</styled.Title>
      <>
        {
          title === 'Notes' ? data : (
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
                    <>
                      <styled.Label>{label}</styled.Label>
                      <styled.Link href={`${urlStart}${url}`}>{name}</styled.Link>
                    </>
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
      data: aliases,
      order: 1
    },
    {
      title: 'Numbers',
      data: numbers,
      order: 2,
      urlStart: 'tel:'
    },
    {
      title: 'Emails',
      data: emails,
      order: 3,
      urlStart: 'mailto:'
    },
    {
      title: 'Social Networks',
      data: socialNetworks,
      order: 4,
      urlStart: 'https://'
    },
    {
      title: 'Notes',
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
