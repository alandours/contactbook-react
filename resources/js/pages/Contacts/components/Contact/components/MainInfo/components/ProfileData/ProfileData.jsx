import React from 'react';
import { objectOf, any } from 'prop-types';
import { getBirthdayText, calculateAge } from '@utils/date';

import Title from '@components/Title';
import FavoriteButton from '@components/FavoriteButton';
import Icon from '@components/Icon';

import styled from './styled';

const ProfileData = ({ contact }) => {
  const { id, fullName, birthday, address, met, favorite } = contact;
  return (
    <styled.ProfileData>
      <styled.MainDatafield>
        <Title>
          <styled.Name birthday={birthday && calculateAge(birthday)}>
            { fullName }
          </styled.Name>
          <FavoriteButton
            isFavorite={!!favorite}
            id={id}
          />
        </Title>
      </styled.MainDatafield>
      { birthday && (
        <styled.MainDatafield>
          <Icon icon="birthday-cake" inline />
          <styled.Text>{getBirthdayText(birthday)}</styled.Text>
        </styled.MainDatafield>
      )}
      { address && (
        <styled.MainDatafield>
          <Icon icon="home" inline />
          <styled.Link
            href={`https://www.google.com/maps/search/${address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </styled.Link>
        </styled.MainDatafield>
      )}
      { met && (
        <styled.MainDatafield>
          <Icon icon="calendar-check" inline />
          <styled.Text>{met}</styled.Text>
        </styled.MainDatafield>
      )}
    </styled.ProfileData>
  );
};

ProfileData.propTypes = {
  contact: objectOf(any).isRequired
};

export default ProfileData;
