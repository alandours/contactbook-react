import React, { useState, useRef } from 'react';
import { objectOf, any } from 'prop-types';

import { formatDate, calculateAge } from '@utils';
import { getPalette } from '@utils/color';

import styled from './styled';

const MainInfo = ({ contact }) => {
  const [palette, setPalette] = useState([]);

  const { photo, full_name: fullName, birthday, address, met } = contact;

  const imageRef = useRef(null);

  return (
    <>
      <styled.Gradient palette={palette} />
      <styled.MainInfo>
        <styled.ProfilePicture
          src={`/img/contacts/${photo}`}
          alt={`${fullName}'s profile picture`}
          ref={imageRef}
          onLoad={() => setPalette(getPalette(imageRef.current, 10))}
        />
        <styled.MainData>
          <styled.MainDatafield>
            <styled.Name>
              {fullName}
              <styled.Age>
                {calculateAge(birthday)}
              </styled.Age>
            </styled.Name>
          </styled.MainDatafield>
          { birthday && (
            <styled.MainDatafield>
              <styled.Icon icon="birthday-cake" />
              <styled.Text>{formatDate(birthday)}</styled.Text>
            </styled.MainDatafield>
          )}
          { address && (
            <styled.MainDatafield>
              <styled.Icon icon="home" />
              <styled.Link href={`https://www.google.com/maps/search/${address}`}>{address}</styled.Link>
            </styled.MainDatafield>
          )}
          { met && (
            <styled.MainDatafield>
              <styled.Icon icon="calendar-check" />
              <styled.Text>{met}</styled.Text>
            </styled.MainDatafield>
          )}

        </styled.MainData>
      </styled.MainInfo>
    </>
  );
};

MainInfo.propTypes = {
  contact: objectOf(any).isRequired
};

export default MainInfo;
