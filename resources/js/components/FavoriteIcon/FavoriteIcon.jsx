import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '@store/actions';
import { bool, number } from 'prop-types';

import Icon from '@components/Icon';

import styled from './styled';

const FavoriteIcon = ({ isFavorite, isButton, id }) => {
  const icon = isFavorite ? ['fas', 'heart'] : ['far', 'heart'];
  const title = isFavorite ? 'Remove from favorites' : 'Add to favorites';

  const dispatch = useDispatch();

  return isButton ? (
    <styled.FavoriteButton
      type="button"
      title={title}
      onClick={() => dispatch(toggleFavorite(id, !isFavorite))}
    >
      <Icon icon={icon} color={['mainColor', 'main']} />
    </styled.FavoriteButton>
  ) : (
    <styled.FavoriteIcon>
      <Icon icon={icon} color={['mainColor', 'main']} />
    </styled.FavoriteIcon>
  );
};

FavoriteIcon.propTypes = {
  isFavorite: bool,
  isButton: bool,
  id: number
};

FavoriteIcon.defaultProps = {
  isFavorite: false,
  isButton: false,
  id: 0
};

export default FavoriteIcon;
