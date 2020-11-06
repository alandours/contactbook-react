import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '@store/actions';
import { bool, number } from 'prop-types';

import Icon from '@components/Icon';

import styled from './styled';

const FavoriteButton = ({ isFavorite, id }) => {
  const icon = isFavorite ? ['fas', 'heart'] : ['far', 'heart'];
  const title = isFavorite ? 'Remove from favorites' : 'Add to favorites';

  const dispatch = useDispatch();

  return (
    <styled.FavoriteButton
      type="button"
      title={title}
      onClick={() => dispatch(toggleFavorite(id, !isFavorite))}
    >
      <Icon icon={icon} color={['mainColor', 'main']} />
    </styled.FavoriteButton>
  );
};

FavoriteButton.propTypes = {
  isFavorite: bool,
  id: number
};

FavoriteButton.defaultProps = {
  isFavorite: false,
  id: 0
};

export default FavoriteButton;
