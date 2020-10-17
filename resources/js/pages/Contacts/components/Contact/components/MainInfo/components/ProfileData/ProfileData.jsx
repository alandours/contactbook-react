import React from 'react';
import { objectOf, any } from 'prop-types';
import { formatDate, calculateAge } from '@utils';

import Icon from '@components/Icon';

import styled from './styled';

const ProfileData = ({ contact }) => {
  const { fullName, birthday, address, met } = contact;
  return (
    <styled.ProfileData>
      <styled.MainDatafield>
        <styled.Name>
          { fullName }
          { birthday && (
            <styled.Age>
              {calculateAge(birthday)}
            </styled.Age>
          )}
        </styled.Name>
      </styled.MainDatafield>
      { birthday && (
        <styled.MainDatafield>
          <Icon icon="birthday-cake" inline />
          <styled.Text>{formatDate(birthday)}</styled.Text>
        </styled.MainDatafield>
      )}
      { address && (
        <styled.MainDatafield>
          <Icon icon="home" inline />
          <styled.Link href={`https://www.google.com/maps/search/${address}`} target="_blank">{address}</styled.Link>
        </styled.MainDatafield>
      )}
      { met && (
        <styled.MainDatafield>
          <Icon icon="calendar-check" inline/>
          <styled.Text>{met}</styled.Text>
        </styled.MainDatafield>
      )}
    </styled.ProfileData>
  );
}

ProfileData.propTypes = {
  contact: objectOf(any).isRequired
};

export default ProfileData;
